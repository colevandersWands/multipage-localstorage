import { update } from './update.js';

import { getItem, setItem } from './test-helpers.js';

describe('update: updates an entry in the data', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    Object.keys(localStorage).forEach((key) => localStorage.removeItem(key));
  });

  it('throws an error if the key does not exist', () => {
    const updateMissingKey = () => update('pie', 'apple');
    expect(updateMissingKey).toThrow(ReferenceError);
  });

  describe('writes a new value to keys that already exist', () => {
    it('toads are not frogs', () => {
      // assign a key in the data
      setItem('toad', '');
      // try updating the key's value
      update('toad', 'not a frog');
      // assert the key's new value
      expect(getItem('toad')).toEqual('not a frog');
    });
    it('can write different types to the same key', () => {
      setItem('isOrange', '');
      update('isOrange', true);
      expect(getItem('isOrange')).toEqual(true);
    });
    it('data should still have only 1 key after updating', () => {
      setItem('password', '');
      update('password', 'P@s5w0rD');
      const numberOfKeys = Object.keys(localStorage).length;
      expect(numberOfKeys).toEqual(1);
    });
  });

  describe('update returns the value you pass in', () => {
    it('returns the same primitive value', () => {
      setItem('favoriteColor', 'blue');
      const newColor = update('favoriteColor', 'orange');
      expect(newColor).toEqual('orange');
    });
    it('returns the same reference-type value (not a clone!)', () => {
      setItem('someNumbers', [1, 2, 3]);
      const newNumbers = [4, 5, 6];
      const returnedNumbers = update('someNumbers', newNumbers);
      const areSameArray = newNumbers === returnedNumbers;
      expect(areSameArray).toEqual(true);
    });
  });

  describe('update throws an error if new data is not JSON-friendly', () => {
    it('rejects functions', () => {
      setItem('thing', '');
      const savingAFunction = () => update('thing', () => {});
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects undefined', () => {
      setItem('thing', '');
      const savingAFunction = () => update('thing', undefined);
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects DOM elements', () => {
      setItem('thing', '');
      const savingAFunction = () =>
        update('thing', document.createElement('div'));
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects objects containing invalid entries', () => {
      setItem('thing', '');
      const savingAFunction = () =>
        update('thing', {
          a: () => {},
          b: document.createElement('div'),
        });
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects arrays containing invalid entries', () => {
      setItem('thing', '');
      const savingAFunction = () =>
        update('thing', [() => {}, document.createElement('div')]);
      expect(savingAFunction).toThrow(TypeError);
    });
  });
});
