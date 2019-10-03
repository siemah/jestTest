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
 * TIPS:
 * 1/- to verify if the test passed beside others
 *    just use only commade like line 31 test.only
 *    to skip all other tests just & run that test with only flag
 * 2/- in many test one test fail & when run alone it passe
 *     then we must see other test who interfer with this test
 * 3/_ or use beforeEeach to fix shared state or to log data
 */

test('should truthy', () => {
  console.log('test will fail')
  expect(null).toBeTruthy();
});

test('should falsy', () => {
  console.log('test will pass')
  expect(null).toBeFalsy();
});

beforeEach(() => {
  console.log('clear shared state or log data')
})