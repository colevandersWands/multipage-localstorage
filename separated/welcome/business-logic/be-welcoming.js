import { readOne } from '../../../data-access/read-one.js';

export const beWelcoming = () => {
  const greeting = readOne('greeting');
  const message = readOne('message');

  let welcomeMessage = '';
  if (greeting) {
    welcomeMessage += `${greeting}!`;
  }
  if (greeting && message) {
    welcomeMessage += ' ';
  }
  if (message) {
    welcomeMessage += `${message}.`;
  }

  return welcomeMessage;
};
