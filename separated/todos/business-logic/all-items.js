import { readOne } from '../../../data-access/read-one.js';

export const allItems = () => {
  return readOne('items');
};
