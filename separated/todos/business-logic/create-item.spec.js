import { createItem } from './create-item.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { readOne } from '../../../data-access/read-one.js';
import { initialize } from '../../../data-access/initialize.js';

describe('createItem: adds a new todo item to the list', () => {
  beforeEach(() => {
    removeAll();
    initialize({
      nextId: 1,
      items: [],
    });
  });

  describe('createItem returns all of the current items including the new one', () => {
    it('when there is only one item', () => {
      const list = createItem('a', false);

      expect(list).toEqual([{ id: 1, done: false, task: 'a' }]);
    });
    it('when there are 3 items', () => {
      createItem('a', false);
      createItem('b', true);
      const list = createItem('c', false);

      expect(list).toEqual([
        { id: 1, done: false, task: 'a' },
        { id: 2, done: true, task: 'b' },
        { id: 3, done: false, task: 'c' },
      ]);
    });
  });

  describe('side-effects in state: "items"', () => {
    it('adds one item at a time', () => {
      createItem('jo', false);

      const list = readOne('items');
      expect(list).toEqual([{ id: 1, done: false, task: 'jo' }]);
    });
    it('adds many items, one at a time', () => {
      createItem('a', false);
      createItem('b', true);
      createItem('c', false);

      const list = readOne('items');
      expect(list).toEqual([
        { id: 1, done: false, task: 'a' },
        { id: 2, done: true, task: 'b' },
        { id: 3, done: false, task: 'c' },
      ]);
    });
  });

  describe('side-effects in state: "nextId"', () => {
    it('adds 1 to the "nextId" property in state', () => {
      createItem('jo', true);

      const newNextId = readOne('nextId');
      expect(newNextId).toEqual(2);
    });
    it('adds 1 two times when adding two items', () => {
      createItem('jo', true);
      createItem('oj', false);

      const newNextId = readOne('nextId');
      expect(newNextId).toEqual(3);
    });
  });

  describe('type-guards', () => {
    it('throws a TypeError if the first argument is not a string', () => {
      const shouldThrow = () => createItem(true, false);
      expect(shouldThrow).toThrow(TypeError);
    });
    it('throws a TypeError if the second argument is not a boolean', () => {
      const shouldThrow = () => createItem('hello', 1);
      expect(shouldThrow).toThrow(TypeError);
    });
  });
});
