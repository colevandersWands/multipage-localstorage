import { readOne } from '../../../data-access/read-one.js';

/**
 *
 * @param {*} key
 * @param {*} value
 * @returns
 */
export const search = (key = '', value) => {
  if (typeof key !== 'string') {
    throw new TypeError('first argument is not a string');
  }

  // read state
  const items = readOne('items');

  // do the stuff
  const searchResults = items.filter(
    (item) => key in item && item[key] === value,
  );

  // return the result
  return searchResults;
};
