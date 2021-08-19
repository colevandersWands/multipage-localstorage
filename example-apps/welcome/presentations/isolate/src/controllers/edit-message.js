import { updateMessage } from '../../../../business-logic/update-message.js';

import { info } from '../views/info.js';
import { warning } from '../views/warning.js';

export const editMessage = (newMessage) => {
  if (typeof newMessage === 'string') {
    updateMessage(newMessage);
    info(`the message is now "${newMessage}"`);
  } else {
    warning('new message must be a string');
  }
};
