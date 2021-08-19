# Data Access

Functions you can use in your Business Logic to access and modify program state.

this folder is an abstraction over `localStorage` to explore persistance and to (sort-of) emulate object databases in the browser for small projects.

each function is stored in a separate file so that all actions are easily visible, and so that dependency graphs clearly indicate which actions are used where.

they're at the root of this repo because all the examples and exercises use them.
