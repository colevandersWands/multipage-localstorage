import { beWelcoming } from '../../../../business-logic/be-welcoming.js';

import { prettyPrint } from '../views/pretty-print.js';

export const welcome = () => {
  const fullMessage = beWelcoming();
  prettyPrint(fullMessage);
};
