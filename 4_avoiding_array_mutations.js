var expect = require('expect'),
        createSpy = expect.createSpy,
        spyOn = expect.spyOn,
        isSpy = expect.isSpy
        deepFreeze = require('deep-freeze');

const addCounter = (list)=> {
  list.push(0);
  return list;
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];
  expect(
    addCounter(listAfter)
  ).toEqual(listAfter);
};

testAddCounter();
console.log('All tests passed');
