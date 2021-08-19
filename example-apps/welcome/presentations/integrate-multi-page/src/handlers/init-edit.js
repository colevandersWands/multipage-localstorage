import { readMessage } from '../../../../business-logic/read-message.js';
import { readGreeting } from '../../../../business-logic/read-greeting.js';

export const initEdit = () => {
  debugger;
  const dataInput = document.getElementById('data-input');
  if (dataInput.name === 'greeting') {
    dataInput.value = readGreeting();
  } else if (dataInput.name === 'message') {
    dataInput.value = readMessage();
  }
};
