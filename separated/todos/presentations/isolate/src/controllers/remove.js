import { removeItem } from '../../../../business-logic/remove-item.js';
import { getTitle } from '../../../../business-logic/get-title.js';
import { allItems } from '../../../../business-logic/all-items.js';

import { logList } from '../views/log-list.js';
import { warning } from '../views/warning.js';

export const remove = (id = 0) => {
  if (typeof id !== 'number') {
    warning('id is not a number');
    return;
  }

  removeItem(id);

  logList(getTitle(), allItems());
};
