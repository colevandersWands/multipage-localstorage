import { readAll } from './read-all.js';

import { setItem } from './test-helpers.js';

describe('readAll: returns an array with all key/value pairs in localStorage', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    Object.keys(localStorage).forEach((key) => localStorage.removeItem(key));
  });

  it('returns an empty array if localStorage is empty', () => {
    expect(readAll()).toEqual([]);
  });

  it('returns all values if they exist', () => {
    setItem('a', 1);
    setItem('b', true);
    setItem('c', ['hello']);
    expect(readAll()).toEqual([
      { key: 'a', value: 1 },
      { key: 'b', value: true },
      { key: 'c', value: ['hello'] },
    ]);
  });
});
