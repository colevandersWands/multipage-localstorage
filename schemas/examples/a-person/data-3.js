import { validation } from '../../../lib/validation.js';

import { schema } from './schema.js';

const data = {
  lastName: 'Rabbit',
  age: 8,
  firstName: 'Roger',
};

validation(schema, data);
