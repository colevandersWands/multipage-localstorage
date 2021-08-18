// import { isJsonData } from '../../../../lib/is-json-data.js';

export const update = (key, newValue) => {
  // if (!isJsonData(newValue)) {
  //   throw new TypeError('cannot update: new value is not JSON-friendly');
  // }

  if (key in localStorage) {
    localStorage.setItem(key, JSON.stringify(newValue));

    const state = Object.keys(localStorage)
      .map((key) => ({ [key]: JSON.parse(localStorage.getItem(key)) }))
      .reduce((next, all) => ({ ...all, ...next }), {});

    console.groupCollapsed(`: update "${key}":`, newValue);
    console.trace('new state:', state);
    console.groupEnd();

    return newValue;
  } else {
    throw new ReferenceError(`cannot update: key "${key}" does not exist`);
  }
};
