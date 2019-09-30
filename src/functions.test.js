const { throwError, } = require('./functions');

test('should be close to .3', () => {
  expect(.1+.2).toBeCloseTo(.3);
  // expect(.1+.2).toBe(.3)// this will fail because a round
});


test('string and regexp match', () => {
  expect('dayenio.ml').toMatch(/day/);
  expect('dayenio.ml').not.toMatch(/zebra/);
});

test('should contain php', () => {
  const langs = ['java', 'javascript', 'php'];
  const langsSet = new Set(langs);
  expect(langsSet).toContain('php');
  expect(langs).toContain('php');
});

test('should throw an error', () => {
  expect(throwError).toThrow();
  expect(throwError).toThrow(Error);
  // mayebe use exact error message or regexp
  expect(throwError).toThrow('youre not allowed');
  expect(throwError).toThrow(/allowed/)
})
