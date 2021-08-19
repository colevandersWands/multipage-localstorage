import { isJsonData } from './utils/is-json-data.js';

export const create = (key = '', value) => {
  if (!isJsonData(value)) {
    throw new TypeError(`cannot update: new value is not JSON data.

only these types are allowed:
- string
- number
- boolean
- null
- arrays
- objects`);
  }

  if (key in localStorage) {
    throw new ReferenceError(`cannot create: key "${key}" already exists`);
  } else {
    localStorage.setItem(key, JSON.stringify(value));

    const state = Object.keys(localStorage)
      .map((key) => ({ [key]: JSON.parse(localStorage.getItem(key)) }))
      .reduce((next, all) => ({ ...all, ...next }), {});

    console.groupCollapsed(`: create "${key}:"`, value);
    console.trace('new state:', state);
    console.groupEnd();

    return value;
  }
};
