import { allItems } from './all-items.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { update } from '../../../data-access/update.js';
import { initialize } from '../../../data-access/initialize.js';
import { readOne } from '../../../data-access/read-one.js';

describe('allItems: returns an array with all the items', () => {
  beforeEach(() => {
    removeAll();
    initialize({
      items: [],
    });
  });

  it('returns an empty array when there are no items', () => {
    const items = allItems();
    expect(items).toEqual([]);
  });

  it('returns an empty array when there are no items', () => {
    update('items', [
      { id: 1, task: 'a', done: false },
      { id: 2, task: 'b', done: true },
      { id: 3, task: 'c', done: false },
    ]);
    const items = allItems();
    expect(items).toEqual([
      { id: 1, task: 'a', done: false },
      { id: 2, task: 'b', done: true },
      { id: 3, task: 'c', done: false },
    ]);
  });

  it('has no side-effects', () => {
    update('items', [
      { id: 1, task: 'a', done: false },
      { id: 2, task: 'b', done: true },
      { id: 3, task: 'c', done: false },
    ]);
    allItems();
    expect(readOne('items')).toEqual([
      { id: 1, task: 'a', done: false },
      { id: 2, task: 'b', done: true },
      { id: 3, task: 'c', done: false },
    ]);
  });
});
