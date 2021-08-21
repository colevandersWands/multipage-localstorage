import { updateGreeting } from '../../../../business-logic/update-greeting.js';

import { info } from '../views/info.js';
import { warning } from '../views/warning.js';

export const editGreeting = (newGreeting) => {
  if (typeof newGreeting === 'string') {
    updateGreeting(newGreeting);
    info(`the greeting is now "${newGreeting}"`);
  } else {
    warning('new greeting must be a string');
  }
};
