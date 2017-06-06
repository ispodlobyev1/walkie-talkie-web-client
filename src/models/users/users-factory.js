import { List } from 'immutable';

import User from './user';
import Account from './account';

export default class UsersFactory {

  /**
   * @param {String} id
   * @param {String} email
   * @returns {Account}
   */
  static createAccount(id, email) {
    return new Account({
      id,
      email,
    });
  }

  /**
   * @param {Object} user
   * @returns {Object}
   */
  static createUser(user) {
    const { id, email, firstName, lastName, password } = user;

    return new User({
      id,
      email,
      firstName,
      lastName,
      password,
    });
  }

  /**
   * @param {Array} users
   * @returns {Object}
   */
  static createUsers(users) {
    return List().withMutations((context) => {
      users.forEach((user) => {
        const newUser = UsersFactory.createUser(user);
        context.push(newUser);
      });
    });
  }
}
