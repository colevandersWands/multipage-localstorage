import { update } from '../../../data-access/update.js';

export const setTitle = (newTitle = '') => {
  if (typeof newTitle !== 'string') {
    throw new TypeError('new title is not a string');
  }

  update('title', newTitle);

  return newTitle;
};
