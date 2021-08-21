export const updateEvent = (item = {}) => {
  return new CustomEvent('update', {
    bubbles: true,
    detail: { item },
  });
};
