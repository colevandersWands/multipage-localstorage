import { readAll } from '../../../data-access/read-all.js';

// a function that checks the kind of value
//  supports:
//    "string", "null", "boolean", "number", "array", "object"
//  if any exist, returns them in an object {key: value, key: value, ...}
//  if none exist, returns false
