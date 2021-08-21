import { removeItem } from '../../../../business-logic/remove-item.js';
import { updateItem } from '../../../../business-logic/update-item.js';

import { listComponent } from '../components/list.js';

export const itemChangesHandler = (event) => {
  let newList;

  if (event.type === 'delete') {
    // read user input from custom event
    const id = event.detail.id;
    // use business logic
    newList = removeItem(id);
  } else if (event.type === 'update') {
    // read user input from custom event
    const itemToUpdate = event.detail.item;
    // use business logic
    newList = updateItem(itemToUpdate);
  }

  // update user interface
  const listContainerEl = document.getElementById('list-root');
  listContainerEl.innerHTML = '';
  listContainerEl.appendChild(listComponent(newList));
};
