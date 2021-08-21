import { allItems } from '../../../../business-logic/all-items.js';
import { getTitle } from '../../../../business-logic/get-title.js';

import { logList } from '../views/log-list.js';

export const showList = () => {
  logList(getTitle(), allItems());
};
