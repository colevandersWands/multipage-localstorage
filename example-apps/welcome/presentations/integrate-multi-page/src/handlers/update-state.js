import { updateGreeting } from '../../../../business-logic/update-greeting.js';
import { updateMessage } from '../../../../business-logic/update-message.js';

export const updateState = (event) => {
  console.log('updating state');

  // read user input
  const targetName = event.target.name;
  const targetValue = event.target.value;

  // execute core logic
  if (targetName === 'message') {
    updateMessage(targetValue);
  } else if (targetName === 'greeting') {
    updateGreeting(targetValue);
  }
};
