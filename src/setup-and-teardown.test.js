let _db = [];

const initializeBD = () => new Promise((res, rej) => {
  res([
    'php',
    'js',
    'nodejs',
    'react',
    'sql',
    'ui web',
    'react-native',
  ]);
});
const initJobs =  () => new Promise((res, rej) => {
  res([
    'fronend',
    'backend',
    'fullstack',
    'web developer',
    'softeare engineer',
    'mobile develoer',
  ]);
});

/**
 * Order of execution of describe and other tests
 * inside the describe block the order matter because
 * it respect the order 
 */
describe('global describe', () => {
  
describe('descire Q', () => {
  console.log('inner describe Q')
  test('should inner describe Q', () => {
    console.log('innet test 1 of describe Q');
    expect(1).toBeTruthy();
  });
});
console.log('between describe Q and test W')
test('should inner test W', () => {
  console.log('inner test W without descibe');
  expect(1).toBeTruthy();
});
console.log('between describe C and test W')
describe('describe inner C', () => {
  console.log('describe inner C');
  test('test for describe inner C', () => {
    console.log('test for describe inner C');
    expect(false).toEqual(false);
  });
});

console.log('describe outer-c');


})
