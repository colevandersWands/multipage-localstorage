import { readOne } from '../../../data-access/read-one.js';

export const readMessage = () => {
  return readOne('message');
};
