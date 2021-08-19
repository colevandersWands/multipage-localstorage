export const includes = (key = '') => {
  const doesIncludeKey = key in localStorage;

  const state = Object.keys(localStorage)
    .map((key) => ({ [key]: JSON.parse(localStorage.getItem(key)) }))
    .reduce((next, all) => ({ ...all, ...next }), {});

  console.groupCollapsed(`: includes "${key}:"`, doesIncludeKey);
  console.trace('state:', state);
  console.groupEnd();

  return doesIncludeKey;
};
