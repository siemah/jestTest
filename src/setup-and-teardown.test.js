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
 */

test.only('should truthy', () => {
  expect(null).toBeTruthy();
});

test('should falsy', () => {
  expect(null).toBeFalsy();
});
