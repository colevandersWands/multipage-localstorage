import { removeItem } from './remove-item.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { readOne } from '../../../data-access/read-one.js';
import { update } from '../../../data-access/update.js';
import { initialize } from '../../../data-access/initialize.js';

describe('removeItem: removes an item from the list by ID', () => {
  beforeEach(() => {
    removeAll();
    initialize({
      items: [],
    });
  });

  describe('side-effect in state: "items"', () => {
    it('removes a specific entry if the entry exists', () => {
      update('items', [{ id: 1 }, { id: 2 }, { id: 3 }]);

      removeItem(2);

      const items = readOne('items');
      expect(items).toEqual([{ id: 1 }, { id: 3 }]);
    });
    it('changes nothing if the entry does not exist', () => {
      update('items', [{ id: 1 }, { id: 2 }, { id: 3 }]);

      removeItem(4);

      const items = readOne('items');
      expect(items).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });
  });

  describe('removeItem returns the updated items', () => {
    it('removes a specific entry if the entry exists', () => {
      update('items', [{ id: 1 }, { id: 2 }, { id: 3 }]);

      const items = removeItem(2);

      expect(items).toEqual([{ id: 1 }, { id: 3 }]);
    });
    it('changes nothing if the entry does not exist', () => {
      update('items', [{ id: 1 }, { id: 2 }, { id: 3 }]);

      const items = removeItem(4);

      expect(items).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });
  });

  describe('type-guards', () => {
    it('throws a TypeError if the argument is not a number', () => {
      const shouldThrow = () => removeItem(true);
      expect(shouldThrow).toThrow(TypeError);
    });
    it('throws a TypeError if the argument is NaN', () => {
      const shouldThrow = () => removeItem(NaN);
      expect(shouldThrow).toThrow(TypeError);
    });
    it('throws a RangeError if the argument is less than 1', () => {
      const shouldThrow = () => removeItem(-1);
      expect(shouldThrow).toThrow(RangeError);
    });
    it('throws an Error if the argument is not an integer', () => {
      const shouldThrow = () => removeItem(1.5);
      expect(shouldThrow).toThrow(Error);
    });
  });
});
