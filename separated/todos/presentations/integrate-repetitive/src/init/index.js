import './state.js';

import { loadListener } from '../listeners/load.js';

import { createItemListener } from '../listeners/create-item.js';

import { deleteItemListener } from '../listeners/delete-item.js';
import { updateItemListener } from '../listeners/update-item.js';

loadListener();

createItemListener('create-new-item');

const listContainerId = 'list-root';

deleteItemListener(listContainerId);
updateItemListener(listContainerId);
