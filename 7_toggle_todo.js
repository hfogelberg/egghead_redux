var expect = require('expect'),
        createSpy = expect.createSpy,
        spyOn = expect.spyOn,
        isSpy = expect.isSpy
        deepFreeze = require('deep-freeze');

const todos = (state=[], action) =>{
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
            id: action.id,
            text: action.text,
            completed: false
        }
      ];
      case 'TOGGLE_TODO':
          return state.map(todo => {
            if (todo.id !== action.id) {
              return todo;
            } else {
              return Object.assign({}, todo, {
                completed: !todo.completed
              });
            }
          });
      default:
        return state;
  }
};

const testAddTodo=()=>{
  const stateBefore = []
  const action ={
    type: 'ADD_TODO',
    id:  0,
    text: 'Learn Redux'
  };

  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

const testToggleTodo=()=>{
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };

  const stateBefore = [
    {
      id:  0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id:  1,
      text: 'Write app',
      completed: false
    }
  ];

  const stateAfter = [
    {
      id:  0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id:  1,
      text: 'Write app',
      completed: true
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(stateAfter);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
}

testAddTodo();
testToggleTodo();

console.log('All tests passed');
