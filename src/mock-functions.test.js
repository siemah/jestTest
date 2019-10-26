let mockfn = jest.fn()
  .mockImplementationOnce(cb => cb(null, true))
  .mockImplementationOnce(cb => cb(null, false))

test('should mock ', () => {

  mockfn((err, val) => console.log(val));
  // > true

  mockfn((err, val) => console.log(val));
})
