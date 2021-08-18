import './state.js';
import './nav-footer.js';

import '../listeners/edit-greeting.js';

import { readGreeting } from '../../business-logic/read-greeting.js';

const greetingInput = document.getElementById('greeting-input');
greetingInput.value = readGreeting();
