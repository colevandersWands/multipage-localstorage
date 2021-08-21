import { readOne } from '../../../data-access/read-one.js';
import { update } from '../../../data-access/update.js';

/**
 *
 * @param {*} task
 * @param {*} done
 * @returns
 */
export const createItem = (task = '', done = false) => {
  if (typeof task !== 'string') {
    throw new TypeError('the first parameter is not a string');
  }
  if (typeof done !== 'boolean') {
    throw new TypeError('the second parameter is not a boolean');
  }

  // read data from state
  const id = readOne('nextId');
  const list = readOne('items');

  // do the stuff
  const newEntry = { id, done, task };
  list.push(newEntry);

  // update state
  update('items', list);
  update('nextId', id + 1);

  // return data
  return list;
};
