import { updateItem } from '../../../../business-logic/update-item.js';

import { listComponent } from '../components/list.js';

export const updateHandler = (event) => {
  // read user input from custom event
  const itemToUpdate = event.detail.item;

  // use business logic
  const newList = updateItem(itemToUpdate);

  // update user interface
  const listContainerEl = document.getElementById('list-root');
  listContainerEl.innerHTML = '';
  listContainerEl.appendChild(listComponent(newList));
};
