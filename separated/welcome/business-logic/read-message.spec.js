import { readMessage } from './read-message.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { create } from '../../../data-access/create.js';

describe('readMessage: reads the message value from state', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    removeAll();
  });

  it('returns an empty string if the message is empty', () => {
    create('message', '');
    const message = readMessage();
    expect(message).toEqual('');
  });

  it('returns the value if it is not empty', () => {
    create('message', 'hello');
    const message = readMessage();
    expect(message).toEqual('hello');
  });
});
