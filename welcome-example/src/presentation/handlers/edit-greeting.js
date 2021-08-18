import { updateGreeting } from '../../business-logic/update-greeting.js';

export const editGreeting = (event) => {
  const newGreeting = event.target.value;
  updateGreeting(newGreeting);
};
