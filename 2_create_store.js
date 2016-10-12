const counter = (state=0, action) =>{
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state -1;
      default:
        return state;
  }
}

var Redux = require('redux');
var createStore = Redux.createStore;
const store = createStore(counter);

var showState =()=>{
  console.log('Logging in showState', store.getState() );
}

store.subscribe(showState);
console.log('The initial state is', store.getState());
store.dispatch({type: 'INCREMENT'});

showState();
