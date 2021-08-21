import { readOne } from '../../../data-access/read-one.js';
import { update } from '../../../data-access/update.js';

import { itemSchema } from '../data/item.schema.js';
import { validate } from '../../../lib/validate.js';

/**
 *
 * @param {*} newItem
 */
export const updateItem = (newItem = {}) => {
  // validate the new item
  const { isValid, validationErrors } = validate(itemSchema, newItem);

  if (!isValid) {
    throw new Error(
      `new item is not valid: \n- ${validationErrors.join('\n- ')}`,
    );
  }

  // read state
  const items = readOne('items');

  // do the stuff
  //  does the entry exist?
  const foundItem = items.find((item) => item.id === newItem.id);
  if (!foundItem) {
    throw new ReferenceError(`there is no entry with id ${newItem.id}`);
  }
  //  replace it if it exists
  const itemIndex = items.indexOf(foundItem);
  items[itemIndex] = newItem;

  // update state
  update('items', items);

  // return the updated items
  return items;
};
