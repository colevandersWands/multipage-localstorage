import { validation } from '../../../lib/validation.js';

import { schema } from './schema.js';

const data = {
  vegetables: [
    {
      veggieName: 'carrot',
      veggieLike: false,
    },
    {
      veggieLike: false,
      veggieName: 'leek',
    },
    {
      veggieLike: false,
      veggieName: 'eggplant',
    },

    {
      veggieLike: false,
      veggieName: 'zucchini',
    },
    {
      veggieName: 'onion',
      veggieLike: false,
    },
  ],
  fruits: [],
};

validation(schema, data);
