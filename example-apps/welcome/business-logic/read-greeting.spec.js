import { readGreeting } from './read-greeting.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { create } from '../../../data-access/create.js';

describe('readGreeting: reads the greeting value from state', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    removeAll();
  });

  it('returns an empty string if the greeting is empty', () => {
    create('greeting', '');
    const greeting = readGreeting();
    expect(greeting).toEqual('');
  });

  it('returns the value if it is not empty', () => {
    create('greeting', 'hello');
    const greeting = readGreeting();
    expect(greeting).toEqual('hello');
  });
});
