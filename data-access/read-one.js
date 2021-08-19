export const readOne = (key = '') => {
  if (key in localStorage) {
    const value = JSON.parse(localStorage.getItem(key));

    const state = Object.keys(localStorage)
      .map((key) => ({ [key]: JSON.parse(localStorage.getItem(key)) }))
      .reduce((next, all) => ({ ...all, ...next }), {});

    console.groupCollapsed(`: read   "${key}":`, value);
    console.trace('state:', state);
    console.groupEnd();

    return value;
  } else {
    throw new ReferenceError(`cannot read: key "${key}" does not exist`);
  }
};
