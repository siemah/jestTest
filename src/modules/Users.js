const fetch = require('node-fetch');

class Users {
  static all() {
    return fetch('/users.json').then(r => {
      console.log('====', r)
      return r;
    });
  }
}

module.exports = Users;
