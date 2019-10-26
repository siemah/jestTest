const mockfn = jest.fn(sc => 1 + sc);

test('custom matchers:', () => {
  mockfn(12);
  describe('mock was called at least once',  () => {
    // toBeCalled matcher allow 2 verify if mock was called at least once
    expect(mockfn).toBeCalled();
    // toBeCalledWith: verify if mock func was called at least once with specify args
    expect(mockfn).toBeCalledWith(12);
  })

})
