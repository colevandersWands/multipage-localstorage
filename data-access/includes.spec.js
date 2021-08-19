import { includes } from './includes.js';

import { setItem } from './test-helpers.js';

describe('includes: checks if a key exists in localStorage', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    Object.keys(localStorage).forEach((key) => localStorage.removeItem(key));
  });

  it('returns true if the key exists', () => {
    setItem('a', 1);
    expect(includes('a')).toEqual(true);
  });

  it('returns false if the key does not exist', () => {
    expect(includes('b')).toEqual(false);
  });
});
