import { isPlainObject } from './utils/is-plain-object.js';
import { isJsonData } from './utils/is-json-data.js';

export const initialize = (data = {}) => {
  if (!isPlainObject(data)) {
    throw new TypeError('data is not a plain object');
  }

  if (!isJsonData(data)) {
    throw new TypeError(`cannot initialize: data is not JSON data.

only these types are allowed:
- string
- number
- boolean
- null
- arrays
- objects`);
  }

  for (const key in localStorage) {
    if (!(key in data)) {
      localStorage.removeItem(key);
    }
  }

  for (const key in data) {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify(data[key]));
    }
  }

  const state = Object.keys(localStorage)
    .map((key) => ({ [key]: JSON.parse(localStorage.getItem(key)) }))
    .reduce((next, all) => ({ ...all, ...next }), {});

  console.groupCollapsed(`: initialize:`, data);
  console.trace('new state:', state);
  console.groupEnd();
};
