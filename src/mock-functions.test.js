const fetch = require('node-fetch');
const Users = require('./modules/Users');

jest.mock('node-fetch');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  fetch.mockResolvedValue(users);
  return Users.all().then(data => {
    console.log(data)
  });
});