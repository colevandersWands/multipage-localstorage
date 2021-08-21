import { validation } from '../../../lib/validation.js';

import { schema } from './schema.js';

const data = {
  firstName: 'Peter',
  age: 32,
};

validation(schema, data);
