import { removeItem } from '../../../../business-logic/remove-item.js';

import { listComponent } from '../components/list.js';

export const deleteHandler = (event) => {
  // read user input from custom event
  const id = event.detail.id;

  // use business logic
  const newList = removeItem(id);

  // update user interface
  const listContainerEl = document.getElementById('list-root');
  listContainerEl.innerHTML = '';
  listContainerEl.appendChild(listComponent(newList));
};
