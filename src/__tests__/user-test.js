jest.mock('../request');

import * as user from '../user';

it('expected to work with promises', () => {
  expect.assertions(1);
  return user.getUserName(4)
    .then(name =>
      expect(name).toBe('Mark')
    )
}
);

it('work with resolves', () => {
  expect.assertions(1);
  return expect(user.getUserName(5)).resolves.toEqual('Paul')
})

it('work with async/await', async () => {
  expect.assertions(1);
  let name = await user.getUserName(5);
  expect(name).toEqual('Paul');
});

it('work with async/await and resolves together 1', async () => {
  expect.assertions(1);
  await expect(user.getUserName(4)).resolves.toEqual('Mark');
});

it('work with async/await and resolves together 2', async () => {
  expect.assertions(1);
  expect(await user.getUserName(5)).toEqual('Paul')
});

it('catch error with promise', () => {
  expect.assertions(1);
  return user.getUserName(2)
    .catch(error => expect(error).toEqual({
      error: 'User with 2 not found.'
    }))
});

