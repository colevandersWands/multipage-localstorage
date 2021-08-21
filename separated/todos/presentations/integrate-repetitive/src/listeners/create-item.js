import { createHandler } from '../handlers/create.js';

export const createItemListener = (id = '') => {
  document.getElementById(id).addEventListener('click', createHandler);
};
