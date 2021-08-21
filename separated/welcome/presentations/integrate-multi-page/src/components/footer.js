/**
 * Renders content for the page footer.
 *
 * @returns {HTMLDivElement} Rendered content for the footer.
 */
export const footer = () => {
  const container = document.createElement('div');
  container.className = 'footer';
  container.innerHTML = 'bottom!';

  return container;
};
