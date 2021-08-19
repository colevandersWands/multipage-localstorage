// expose app as a global variable
import { app } from './app.js';

window.app = app;

// initialize state
import { initialize } from '../../../../../data-access/initialize.js';

import { friendly } from '../../../data/friendly.js';

initialize(friendly);
