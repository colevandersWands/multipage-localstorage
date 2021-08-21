import { search } from './search.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { initialize } from '../../../data-access/initialize';
import { update } from '../../../data-access/update.js';
import { readOne } from '../../../data-access/read-one.js';

describe('search: finds all items with a given key/value pair, using strict equality', () => {
  beforeEach(() => {
    removeAll();
    initialize({
      items: [],
    });
  });

  describe('search returns all matching items in an array', () => {
    it('can search by "id"', () => {
      update('items', [{ id: 0 }, { id: 2, hel: 'lo' }, { id: 5 }]);
      const result = search('id', 2);
      expect(result).toEqual([{ id: 2, hel: 'lo' }]);
    });
    it('can search by "done"', () => {
      update('items', [
        { id: 1, done: false, task: 'a' },
        { id: 2, done: true, task: 'b' },
        { id: 3, done: false, task: 'c' },
      ]);
      const result = search('done', false);
      expect(result).toEqual([
        { id: 1, done: false, task: 'a' },
        { id: 3, done: false, task: 'c' },
      ]);
    });
    it('returns an empty array if there are no matches', () => {
      update('items', [{ id: 0 }, { id: 2, hel: 'lo' }, { id: 5 }]);
      const result = search('id', 4);
      expect(result).toEqual([]);
    });
    it('returns an empty array if the key does not exist', () => {
      update('items', [{ id: 0 }, { id: 2, hel: 'lo' }, { id: 5 }]);
      const result = search('thing', 'hello');
      expect(result).toEqual([]);
    });
  });

  describe('search has no side-effects', () => {
    it('when there are matches', () => {
      update('items', [
        { id: 1, done: false, task: 'a' },
        { id: 2, done: false, task: 'b' },
        { id: 3, done: false, task: 'c' },
      ]);
      search('done', false);

      const items = readOne('items');
      expect(items).toEqual([
        { id: 1, done: false, task: 'a' },
        { id: 2, done: false, task: 'b' },
        { id: 3, done: false, task: 'c' },
      ]);
    });
    it('when there are no matches', () => {
      update('items', [
        { id: 1, done: false, task: 'a' },
        { id: 2, done: false, task: 'b' },
        { id: 3, done: false, task: 'c' },
      ]);
      search('done', true);

      const items = readOne('items');
      expect(items).toEqual([
        { id: 1, done: false, task: 'a' },
        { id: 2, done: false, task: 'b' },
        { id: 3, done: false, task: 'c' },
      ]);
    });
  });

  describe('type-guards', () => {
    it('throws a TypeError if the first parameter is not a string', () => {
      const shouldThrow = () => search(1, true);
      expect(shouldThrow).toThrow(TypeError);
    });
  });
});
