import { validation } from '../../../lib/validation.js';

import { schema } from './schema.js';

const data = {
  age: 89,
  firstName: 'Chaise',
};

validation(schema, data);
