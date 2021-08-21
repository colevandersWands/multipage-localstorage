export const allKeys = () => {
  const keys = Object.keys(localStorage);

  const state = Object.keys(localStorage)
    .map((key) => ({ [key]: JSON.parse(localStorage.getItem(key)) }))
    .reduce((next, all) => ({ ...all, ...next }), {});

  console.groupCollapsed(`: keys:`, keys);
  console.trace('state:', state);
  console.groupEnd();

  return keys;
};
