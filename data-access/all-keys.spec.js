import { allKeys } from './all-keys.js';

import { setItem } from './test-helpers.js';

describe('allKeys: returns an array with all the saved keys', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    Object.keys(localStorage).forEach((key) => localStorage.removeItem(key));
  });

  it('returns all the keys if they exist', () => {
    setItem('a', 1);
    setItem('b', true);
    setItem('c', 'asdf');
    expect(allKeys()).toEqual(['a', 'b', 'c']);
  });

  it('returns an empty array if there are no keys', () => {
    expect(allKeys()).toEqual([]);
  });
});
