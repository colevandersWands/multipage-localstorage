import { editMessage } from '../handlers/edit-message.js';

document.getElementById('message-input').addEventListener('keyup', editMessage);
