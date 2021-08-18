import { updateMessage } from '../../business-logic/update-message.js';

export const editMessage = (event) => {
  const newMessage = event.target.value;
  updateMessage(newMessage);
};
