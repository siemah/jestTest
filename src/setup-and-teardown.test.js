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

beforeEach( async () => {
  return _db = await initializeBD();
});

afterEach(() => {
  _db = [];
});

test('should php be one of my programming languafe i use as backend lang', () => {
  expect(_db).toContain('php');
});

test('should i know react-native', () => {
  expect(_db).toContain('react-native');
});

