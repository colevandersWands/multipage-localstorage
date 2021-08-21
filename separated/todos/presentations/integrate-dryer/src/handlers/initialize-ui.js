import { allItems } from '../../../../business-logic/all-items.js';
import { getTitle } from '../../../../business-logic/get-title.js';

import { listComponent } from '../components/list.js';

export const initializeUi = () => {
  document.getElementById('title').innerText = getTitle();

  const listEl = listComponent(allItems());
  document.getElementById('list-root').appendChild(listEl);
};
