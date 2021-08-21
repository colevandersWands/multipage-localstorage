import { itemChangesHandler } from '../handlers/item-changes.js';

export const changesListener = (id = '') => {
  document.getElementById(id).addEventListener('delete', itemChangesHandler);
  document.getElementById(id).addEventListener('update', itemChangesHandler);
};
