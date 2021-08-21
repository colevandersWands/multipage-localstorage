import { validation } from '../../../lib/validation.js';

import { schema } from './schema.js';

const data = {
  vegetables: [],
  fruits: [
    'papaya',
    'mango',
    'pineapple',
    'apple',
    'pear',
    'dragonfruit',
    'guava',
  ],
};

validation(schema, data);
