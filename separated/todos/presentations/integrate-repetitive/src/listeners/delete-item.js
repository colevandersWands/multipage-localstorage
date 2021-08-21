import { deleteHandler } from '../handlers/delete.js';

export const deleteItemListener = (id = '') => {
  document.getElementById(id).addEventListener('delete', deleteHandler);
};
