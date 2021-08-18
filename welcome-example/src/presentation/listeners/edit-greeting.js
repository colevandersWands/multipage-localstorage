import { editGreeting } from '../handlers/edit-greeting.js';

document
  .getElementById('greeting-input')
  .addEventListener('keyup', editGreeting);
