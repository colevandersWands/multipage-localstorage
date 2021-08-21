import { readOne } from '../../../data-access/read-one.js';
import { update } from '../../../data-access/update.js';

/**
 *
 * @param {*} idToRemove
 */
export const removeItem = (idToRemove = 0) => {
  if (typeof idToRemove !== 'number' || Number.isNaN(idToRemove)) {
    throw new TypeError('first parameter is not a number');
  }
  if (idToRemove < 1) {
    throw new RangeError('IDs must be greater than 1');
  }
  if (!Number.isInteger(idToRemove)) {
    throw new Error('IDs must be an integer');
  }

  // read state
  const items = readOne('items');

  // do the stuff
  const newItems = items.filter((item) => item.id !== idToRemove);

  // update state
  update('items', newItems);

  // return the items
  return newItems;
};
