import { removeAll } from './remove-all.js';

import { setItem } from './test-helpers.js';

describe('removeAll: removes all localStorage entries', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    Object.keys(localStorage).forEach((key) => localStorage.removeItem(key));
  });

  it('removes all keys that are not in the new data', () => {
    setItem('a', 1);
    setItem('b', 2);
    setItem('c', 3);
    removeAll();
    expect(Object.keys(localStorage).length).toEqual(0);
  });
});
