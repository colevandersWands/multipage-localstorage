import { updateItem } from '../../../../business-logic/update-item.js';
import { getTitle } from '../../../../business-logic/get-title.js';
import { allItems } from '../../../../business-logic/all-items.js';

import { logList } from '../views/log-list.js';
import { warning } from '../views/warning.js';

export const toggle = (id = 0) => {
  if (typeof id !== 'number') {
    warning(`id must be a number`);
    return;
  }

  const items = allItems();

  const item = items.find((item) => item.id === id);
  if (!item) {
    warning(`there is no todo with id ${id}`);
    return;
  }

  item.done = !item.done;
  updateItem(item);

  logList(getTitle(), items);
};
