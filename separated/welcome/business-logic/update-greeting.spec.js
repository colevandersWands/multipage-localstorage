import { updateGreeting } from './update-greeting.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { create } from '../../../data-access/create.js';
import { readOne } from '../../../data-access/read-one.js';

describe('updateGreeting: updates the greeting value from state', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    removeAll();
  });

  it('updates the greeting', () => {
    create('greeting', 'hello');
    updateGreeting('good bye');
    expect(readOne('greeting')).toEqual('good bye');
  });

  it('returns the new greeting', () => {
    create('greeting', '');
    const greeting = updateGreeting('hi');
    expect(greeting).toEqual('hi');
  });
});
