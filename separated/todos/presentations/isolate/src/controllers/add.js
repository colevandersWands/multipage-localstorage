import { createItem } from '../../../../business-logic/create-item.js';
import { getTitle } from '../../../../business-logic/get-title.js';

import { logList } from '../views/log-list.js';
import { warning } from '../views/warning.js';

export const add = (newTask = '') => {
  if (typeof newTask === 'string') {
    const newList = createItem(newTask, false);
    logList(getTitle(), newList);
  } else {
    warning('new task is not a string');
  }
};
