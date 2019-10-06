/**
 * mock a function 
 * 1- to see if will erasing its implementation
 * 2- capturing calls to this function & params passed in those calls
 * 3- test return values
 * 4- capturing instanciation of this function
 * there is 2 ways to mock a function: 
 * 1/- create a mock to test it
 * 2/- writing a manual mock to override a module dependency.
 */

// USING MOCK FUNCTION
// forEach is a function to mock
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
test('should mock forEach function', () => {

  // create a forEach mock function
  const forEachCallbackMock = jest.fn(item => item + 1);

  // use a mock function with forEach
  forEach([4, 3], forEachCallbackMock);

  // test if the mock function called twice see line 4(capturing calls)
  expect(forEachCallbackMock.mock.calls.length).toBe(2);

  // test if the mock function called twice see line 4(capturing params passed)
  // and will expect to be 4 & 3 in order
  expect(forEachCallbackMock.mock.calls[0][0]).toBe(4);// 1st arg for 1st call
  expect(forEachCallbackMock.mock.calls[1][0]).toBe(3);// 1st arg for 2st call
  // expect(forEachCallbackMock.mock.calls[1][1]).toBe(3);// 2st arg for 2st call

  // test the return value/s see line 5
  expect(forEachCallbackMock.mock.results[0].value).toBe(5);// result of 1st call
  expect(forEachCallbackMock.mock.results[1].value).toBe(4);// result of 2nd call

  // how many this function instancied
  expect(forEachCallbackMock.mock.instances.length).toBe(2);

  // get the name of instance
  // console.log(forEachCallbackMock.mock.instances[0].name)

});

// here will find how to capture instanciation of function
const _mock = jest.fn();

let a = new _mock();
let b = {};
let bound = _mock.bind(b);
bound()
console.log(_mock.mock.instances) // where mockConstructor {} is a & {} is b 
