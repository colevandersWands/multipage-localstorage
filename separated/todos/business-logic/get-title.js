import { readOne } from '../../../data-access/read-one.js';

export const getTitle = () => {
  return readOne('title');
};
