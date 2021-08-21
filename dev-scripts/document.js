import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// import { exec } from 'child_process';

import dependencyCruiser from 'dependency-cruiser';
const { cruise } = dependencyCruiser;

import graphvizCLI from 'graphviz-cli';
const { renderGraphFromSource } = graphvizCLI;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cruiserOptions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '..', '.dependency-cruiser.json'),
    'utf-8',
  ),
);

const passedPath = process.argv[2];

const ROOT = path.join(__dirname, '..', passedPath || '');

const CRUISABLE_PATH_NAMES = [
  // 'isolate',
  // 'presentation',
  'src',
];
const IGNORABLE_PATHS = ['.git', 'node_modules'];

if (!fs.existsSync(ROOT)) {
  throw new Error(`/${passedPath} is not a path in this directory`);
}

const findCruisablePaths = async (dirPath) => {
  if (IGNORABLE_PATHS.includes(dirPath.split(path.sep).pop())) {
    return [];
  }

  if (CRUISABLE_PATH_NAMES.includes(dirPath.split(path.sep).pop())) {
    return [dirPath];
  }

  const pathsToCruise = [];

  const contents = fs.readdirSync(dirPath);
  for (const thing of contents) {
    const absThingPath = path.join(dirPath, thing);
    if (fs.lstatSync(absThingPath).isDirectory()) {
      const cruisables = findCruisablePaths(absThingPath);
      pathsToCruise.push(cruisables);
    }
  }

  return Promise.all(pathsToCruise);
};

findCruisablePaths(ROOT)
  .then((unflatPaths) => unflatPaths.flat(Infinity))
  .then(async (paths) => {
    const cruised = paths.map((path) => ({
      path,
      graph: cruise([path], cruiserOptions).output,
    }));

    for (const project of cruised) {
      console.log(project.path);

      renderGraphFromSource({ input: project.graph }, { format: 'svg' })
        .then((svgGraph) => {
          const graphBasePath = path.join(
            project.path,
            '..',
            'dependency-graph',
          );
          fs.writeFile(
            `${graphBasePath}.svg`,
            svgGraph,
            'utf-8',
            (err) => err && console.error(err),
          );
        })
        .catch((err) => console.error(err));
    }

    // await import(
    //   '../node_modules/dependency-cruiser/bin/wrap-stream-in-html.js'
    // );

    // for (const path of paths) {
    //   console.log(path);
    // }
  })
  .catch((err) => console.error(err));
