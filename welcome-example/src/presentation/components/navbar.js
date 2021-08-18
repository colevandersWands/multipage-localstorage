/**
 * The shared navbar.
 *
 * @returns {HTMLDivElement} A rendered nav bar element.
 */
export const navbar = () => {
  const container = document.createElement('nav');
  container.className = 'navbar';

  const anchor1 = document.createElement('a');
  anchor1.innerHTML = 'home';
  anchor1.href = './index.html';
  container.appendChild(anchor1);

  const anchor2 = document.createElement('a');
  anchor2.innerHTML = 'greeting';
  anchor2.href = './edit-greeting.html';
  container.appendChild(anchor2);

  const anchor3 = document.createElement('a');
  anchor3.innerHTML = 'message';
  anchor3.href = './edit-message.html';
  container.appendChild(anchor3);

  return container;
};
