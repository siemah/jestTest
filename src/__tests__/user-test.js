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
}
)