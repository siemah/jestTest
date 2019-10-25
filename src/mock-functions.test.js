let _mock = jest.fn();

let m1 = new _mock();

it('function mock', () => {
  describe('instanciate length 1', () => {
    expect(_mock.mock.instances.length).toBe(1);
  });
  describe('number of calls 1', () => {
    expect(_mock.mock.calls.length).toBe(1);
    expect(_mock.mock.calls[0][0]).toBeUndefined()
  });
  describe('no results for this mock instance', () => {
    expect(_mock.mock.results[0].value).toBeUndefined();
  });
});

