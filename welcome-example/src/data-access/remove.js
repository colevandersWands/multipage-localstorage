export const remove = (key) => {
  if (key in localStorage) {
    const oldValue = JSON.parse(localStorage.getItem(key));
    localStorage.removeItem(key);

    const state = Object.keys(localStorage)
      .map((key) => ({ [key]: JSON.parse(localStorage.getItem(key)) }))
      .reduce((next, all) => ({ ...all, ...next }), {});

    console.groupCollapsed(`: remove "${key}"`);
    console.trace('new state:', state);
    console.groupEnd();

    return oldValue;
  } else {
    throw new ReferenceError(`cannot remove: key "${key}" does not exist`);
  }
};
