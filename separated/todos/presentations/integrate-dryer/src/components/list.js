import { itemComponent } from './item.js';

export const listComponent = (list = []) => {
  const listContainer = document.createElement('div');

  const filterFormHTML = `
    <form id='filter-form'>
      done: <input type='checkbox' checked name='done' />
      not done: <input type='checkbox' checked name='notDone' />
    </form>`;

  listContainer.innerHTML = filterFormHTML;
  listContainer.addEventListener('change', (event) => {
    event.preventDefault();

    if (!event.target.form || event.target.form.id !== 'filter-form') {
      return;
    }

    const done = event.target.form.done.checked;
    const notDone = event.target.form.notDone.checked;

    const filteredList = list
      .filter((item) => (item.done === true ? done : true))
      .filter((item) => (item.done === false ? notDone : true));

    listEl.innerHTML = '';
    for (const item of filteredList) {
      listEl.appendChild(itemComponent(item));
    }
  });

  const listEl = document.createElement('ul');
  listEl.className = 'items-list';
  for (const item of list) {
    listEl.appendChild(itemComponent(item));
  }
  listContainer.appendChild(listEl);

  return listContainer;
};
