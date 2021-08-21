export const deleteEvent = (id = 0) => {
  return new CustomEvent('delete', {
    bubbles: true,
    detail: { id },
  });
};
