jest.mock('./modules/foo');
const foo = require('./modules/foo');

test('should mock function implementation', () => {
  foo.mockImplementation(n => n);
  console.log(foo())
})
