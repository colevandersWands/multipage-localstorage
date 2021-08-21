import { createItem } from '../../../../business-logic/create-item.js';

import { listComponent } from '../components/list.js';

export const createHandler = (event) => {
  // read user input from custom event
  const task = event.target.form.task.value;
  const done = event.target.form.done.checked;

  // use business logic
  const newList = createItem(task, done);

  // update user interface
  const listContainerEl = document.getElementById('list-root');
  listContainerEl.innerHTML = '';
  listContainerEl.appendChild(listComponent(newList));
};
