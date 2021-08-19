// a function that finds values like the argument
//  supports:
//    "string", "boolean", "array", "object"
//  if a string is passed
//    returns an object with all key/values who's value include the argument
//  if a boolean is passed
//    returns all the key/value pairs with truthy/falsy value
//  if an array
//    returns all key/value pairs with an array that includes all the items in the argument (deep equality)
//  if an object
//    returns all key/value pairs with an object that includes all the key/value pairs in the argument (deep equality)
