import { setTitle } from './set-title.js';

import { removeAll } from '../../../data-access/remove-all.js';
import { initialize } from '../../../data-access/initialize.js';
import { readOne } from '../../../data-access/read-one.js';

describe('setTitle: updates the title in state', () => {
  beforeEach(() => {
    removeAll();
    initialize({
      title: '',
    });
  });

  it('side-effect in state: changes "title"', () => {
    setTitle('hello');
    expect(readOne('title')).toEqual('hello');
  });

  it('returns the new title', () => {
    const newTitle = setTitle('good bye');
    expect(newTitle).toEqual('good bye');
  });
});
