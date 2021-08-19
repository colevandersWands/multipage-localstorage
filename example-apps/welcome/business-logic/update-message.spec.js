import { updateMessage } from './update-message.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { create } from '../../../data-access/create.js';
import { readOne } from '../../../data-access/read-one.js';

describe('updateMessage: updates the message value from state', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    removeAll();
  });

  it('updates the message', () => {
    create('message', 'hello');
    updateMessage('good bye');
    expect(readOne('message')).toEqual('good bye');
  });

  it('returns the new message', () => {
    create('message', '');
    const message = updateMessage('hi');
    expect(message).toEqual('hi');
  });
});
