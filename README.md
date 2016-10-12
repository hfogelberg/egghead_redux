# Redux course

Notes and example code following Dan Abramov's course [Getting Started with Redux on Egghead](https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree).

## Princliples and intro
###First Principle of Redux
The entire state of the application will be represented by one JavaScript object.

### Second Principle of Redux
The state tree is read only. The only way to change a state is to despath and action. An action is a JavaScript object describing the change. Any data that gets in to a Redux application gets there by actions.

### Pure and impure functions
Pure functions have no observable side effects. They only depend on their input values and calculate the new value. Pure functions do not modify the values passed to them.
````
function square(x) {
  return x * x;
}
````
Impure functions have side effects (eg update the data base).
````
function square(x) {
  updateDb(x);
  return x *x;
}
````

__ The UIS layer is most predictable when it's described by pure functions.

### The Reducer Function
Inside Redux applications there is a particualr function called the reducer that takes the previous state and the action. It returns the next state of __the whole__  application. It is important that the function is pure.

## Reducer  and store
### Counter reducer with tests
(Example code 1)[./1_counter_reducer.js] demonstrates action and reducers.

### Redux store
The store binds together the three principles of Redux:
1. It holds the current application state object.
2. It allows you to dispatch applications.
3. You need to specify the reducer that tells how the state is updated.

  __Store has three important methods:__
  1. getState() retrieves the current state.
  2. dispathch() dispatches an action to change the state.
  3. subscribe() registers a callback that the  redux store will call any time the state of the application is changed:

[Store example without Redux](./2_create_store.js)
[Store example using Redux] (./3_create_store.html)

### Avoid mutations in Redux
The Redux store must  not be mutated. It is immutable.
Instead of mutating, create a new array or object with the changes.

[Avoid array mutations](./4_avoid_array_mutation.js)
[Avoid object mutation](./5_avoid_object_mutation.js)
