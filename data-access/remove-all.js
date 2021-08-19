export const removeAll = () => {
  Object.keys(localStorage).forEach((key) => localStorage.removeItem(key));

  const state = Object.keys(localStorage)
    .map((key) => ({ [key]: JSON.parse(localStorage.getItem(key)) }))
    .reduce((next, all) => ({ ...all, ...next }), {});

  console.groupCollapsed(`: remove all:`, state);
  console.trace();
  console.groupEnd();
};
