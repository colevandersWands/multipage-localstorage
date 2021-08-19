export const readAll = () => {
  const entries = Object.entries(localStorage).map((entry) => ({
    key: entry[0],
    value: JSON.parse(entry[1]),
  }));

  const state = Object.keys(localStorage)
    .map((key) => ({ [key]: JSON.parse(localStorage.getItem(key)) }))
    .reduce((next, all) => ({ ...all, ...next }), {});

  console.groupCollapsed(`: read all:`, entries);
  console.trace('state:', state);
  console.groupEnd();

  return entries;
};
