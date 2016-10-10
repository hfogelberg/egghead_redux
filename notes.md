# Videos
## Video 1
__First Principle of Redux__
The entire state of the application will be represented by one JavaScript object.

## Video 2
__Second Principle of Redux__
The state tree is read only. The only way to change a state is to despath and action. An action is a JavaScript object describing the change. Any data that gets in to a Redux application gets there by actions.

## Video 3
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

# Video 4
