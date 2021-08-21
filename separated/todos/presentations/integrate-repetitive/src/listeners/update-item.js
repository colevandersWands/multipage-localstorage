import { updateHandler } from '../handlers/update.js';

export const updateItemListener = (id = '') => {
  document.getElementById(id).addEventListener('update', updateHandler);
};
