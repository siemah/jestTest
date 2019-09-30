const {fetchData, failData, } = require('./async');

test('the response of fetchData bo better', () => {
  return fetchData().then( ( data) => {
    expect(data).toBe('better');
  })
});

test('should promise fail and catch "error" as  message', () => {
  return failData().catch(e => {
    expect.assertions(1); // add number of assertions expected
    expect(e).toBe('error')
  })
});

// or use resolves and rejects matcher 
// when use promise matcher we should return expect
// 2 tell jest must wait till resolve/reject

test('should resolve better', () => {
  return expect(fetchData()).resolves.toBe('better');
});

test('should fall this and return "error"', () => {
  return expect(failData()).rejects.toMatch('error')
});

// or simplify this by using async/await keymords
test('should resolved "better" using async/await', async () => {
  let data = await fetchData();
  expect(data).toMatch('better');
});

test('should rejected "error" using async/await', async () => {
  expect.assertions(1)
  try {
    let data = await failData();
  } catch (error) {
    expect(error).toMatch('error');
  }
});

// and finally we can combine both resolve/rejects matchers
// with async/await keyword
test('should resolve "better" using combination of resolves matcher and async/await', async () => {
  await expect(fetchData()).resolves.toMatch('better');
});

test('should ', async () => {
  await expect(failData()).rejects.toBe('error')  
})





