export const itemSchema = {
  title: 'item',
  description: 'a todo item',
  type: 'object',
  required: ['id', 'done', 'task'],
  properties: {
    id: {
      type: 'integer',
      description: 'a unique identifier for each todo',
      minimum: 1,
    },
    task: {
      type: 'string',
      description: 'the thing that needs to be done',
    },
    done: {
      type: 'boolean',
      description: 'is the task completed or not',
    },
  },
};
