import './state.js';

import { loadListener } from '../listeners/load.js';

import { createItemListener } from '../listeners/create-item.js';

import { changesListener } from '../listeners/changes.js';

loadListener();

createItemListener('create-new-item');

changesListener('list-root');
