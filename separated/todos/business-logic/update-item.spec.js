import { updateItem } from './update-item.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { initialize } from '../../../data-access/initialize';
import { update } from '../../../data-access/update.js';
import { readOne } from '../../../data-access/read-one.js';

describe('updateItem: updates an item in the list by ID', () => {
  beforeEach(() => {
    removeAll();
    initialize({
      items: [],
    });
  });

  describe('returns the updated list, if the item exists', () => {
    it('throws an error if the ID does not exist in items', () => {
      update('items', [
        { id: 1, done: false, task: 'a' },
        { id: 2, done: true, task: 'b' },
      ]);

      const shouldThrow = () =>
        updateItem({ id: 3, done: false, task: 'sleep' });

      expect(shouldThrow).toThrow(ReferenceError);
    });
    it('replaces the entry if the ID exists', () => {
      update('items', [
        { id: 1, done: false, task: 'a' },
        { id: 2, done: true, task: 'b' },
      ]);

      updateItem({ id: 2, done: false, task: 'sleep' });

      expect(readOne('items')).toEqual([
        { id: 1, done: false, task: 'a' },
        { id: 2, done: false, task: 'sleep' },
      ]);
    });
  });

  describe('throws an error if the new item is not valid', () => {
    it('when the ID is missing', () => {
      const shouldThrow = () => updateItem({ done: false, task: 'a' });
      expect(shouldThrow).toThrow(Error);
    });
    it('when the ID is not valid', () => {
      const shouldThrow = () =>
        updateItem({ id: true, done: false, task: 'a' });
      expect(shouldThrow).toThrow(Error);
    });
    it('when "done" is missing', () => {
      const shouldThrow = () => updateItem({ id: 1, task: 'a' });
      expect(shouldThrow).toThrow(Error);
    });
    it('when "done" is not valid', () => {
      const shouldThrow = () => updateItem({ id: 1, done: 'hello', task: 'a' });
      expect(shouldThrow).toThrow(Error);
    });
    it('when "task" is missing', () => {
      const shouldThrow = () => updateItem({ id: 1, done: true });
      expect(shouldThrow).toThrow(Error);
    });
    it('when "task" is not valid', () => {
      const shouldThrow = () => updateItem({ id: 1, done: true, task: 12 });
      expect(shouldThrow).toThrow(Error);
    });
  });
});
