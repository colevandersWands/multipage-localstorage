// https://json-schema.org/learn/miscellaneous-examples.html

export const schema = {
  title: 'a person',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      description: "The person's first name.",
    },
    lastName: {
      type: 'string',
      description: "The person's last name.",
    },
    age: {
      description: 'Age in years which must be equal to or greater than zero.',
      type: 'integer',
      minimum: 0,
    },
  },
  required: ['firstName', 'age'],
};
