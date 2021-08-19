import { initialize } from './initialize.js';

import { setItem, getItem } from './test-helpers.js';

describe('initialize: initializes localStorage with new data', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    Object.keys(localStorage).forEach((key) => localStorage.removeItem(key));
  });

  it('removes all keys that are not in the new data', () => {
    setItem('a', 1);
    initialize({});
    expect(getItem('a')).toEqual(null);
  });

  it('adds keys that were in the data, but not in local storage', () => {
    initialize({ a: 1 });
    expect(getItem('a')).toEqual(1);
  });

  it('does not modify keys that were already saved in local storage', () => {
    setItem('a', 1);
    initialize({ a: 2 });
    expect(getItem('a')).toEqual(1);
  });
});
