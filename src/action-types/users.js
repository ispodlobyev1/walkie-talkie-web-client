export const SIGN_IN = 'users:SIGN_IN';
/**
 * @param {String} email
 * @param {String} password
 */
export const signIn = (email, password) => ({
  type: SIGN_IN,
  payload: {
    email,
    password,
  },
});

export const SIGN_UP_FAILED = 'users:SIGN_UP_FAILED';
/**
 * @param {String} message
 */
export const signUpFailed = message => ({
  type: SIGN_UP_FAILED,
  payload: {
    message,
  },
});

export const SIGN_UP_SUCCEEDED = 'users:SIGN_UP_SUCCEEDED';
export const signUpSucceeded = () => ({
  type: SIGN_UP_SUCCEEDED,
});

export const SIGN_UP = 'users:SIGN_UP';
/**
 * @param {String} email
 * @param {String} firstName
 * @param {String} lastName
 * @param {String} password
 */
export const signUp = (email, firstName, lastName, password) => ({
  type: SIGN_UP,
  payload: {
    email,
    firstName,
    lastName,
    password,
  },
});
