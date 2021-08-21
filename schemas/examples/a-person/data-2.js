import { validation } from '../../../lib/validation.js';

import { schema } from './schema.js';

const data = {
  age: 43,
  firstName: 'Alana',
  lastName: 'Rodriguez',
};

validation(schema, data);
