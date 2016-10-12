var expect = require('expect'),
        createSpy = expect.createSpy,
        spyOn = expect.spyOn,
        isSpy = expect.isSpy
        deepFreeze = require('deep-freeze');

const addCounter = (list)=> {
  // Use concat becaues it doesn't modify the original object
  // Same as list.concat([0])
  return [...list, 0];
}

const removeCounter = (list, index)=>{
  // Mutates the list. Don't use
  // list.splice(index, 1);

  // Old syntax
  // return list
  //   .slice(0, index)
  //   .concat(list.slice(index + 1));


  // ES6 syntax
  return [
    ...list.slice(0, index),
    ...list.slice(index+1)
  ];
}

// Increment a value in one of the counter arrays without mutating the array
const IncrementCounter = (list, index)=>{
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
}

const testIncrementCounter = () =>{
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);

  expect(
    IncrementCounter(listBefore, 1)
  ).toEqual(listAfter);
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);
  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

const testRemoveCounter=()=>{
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  expect (
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
}

testAddCounter();
testRemoveCounter();
testIncrementCounter();

console.log('All tests passed');
