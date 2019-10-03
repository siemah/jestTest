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
 * SCOPE
 * the initializeDB function run for every test 
 * because its in global scope of all tests
 */

beforeEach(() => {
  console.log('global before')
  return initializeBD().then(res => {
    _db = res;
  });
});

test('should master "php"', () => {
  expect(_db).toContain('php');
});

describe('mathing jobs to langs', () => {

  let _jobs = [];
  beforeEach( () =>{
    console.log('describe before')
    return initJobs().then(j => _jobs = j);
  });

  afterEach(() => {
    _jobs = null;
  });


  test('should be backend to master "php"', () => {
    expect(_jobs).toContain('backend')
  });

})

