import { readGreeting } from '../../../../business-logic/read-greeting.js';
import { readMessage } from '../../../../business-logic/read-message.js';
import { beWelcoming } from '../../../../business-logic/be-welcoming.js';

export const initIndex = () => {
  document.getElementById('words').innerHTML = beWelcoming();
  document.getElementById('greeting-input').value = readGreeting();
  document.getElementById('message-input').value = readMessage();
};
