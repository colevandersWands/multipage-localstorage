import './state.js';
import './nav-footer.js';

import '../listeners/edit-message.js';

import { readMessage } from '../../business-logic/read-message.js';

const messageInput = document.getElementById('message-input');
messageInput.value = readMessage();
