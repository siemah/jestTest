let mockfn = jest
  .fn(cb => 'default behavior of implementation')
  .mockImplementationOnce(cb => '1st call')
  .mockImplementationOnce(cb => '2nd call')

test('should mock ', () => {

  console.log(
    mockfn(),
    mockfn(),
    mockfn(),
    mockfn(),
  )

})
