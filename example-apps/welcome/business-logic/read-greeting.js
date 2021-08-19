import { readOne } from '../../../data-access/read-one.js';

export const readGreeting = () => {
  return readOne('greeting');
};
