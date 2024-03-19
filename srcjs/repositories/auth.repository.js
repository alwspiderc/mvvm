import client from './client';

/**
 * @typedef {import('../common/models/user.model')}
 */

/**
 * Logs in a user.
 * @typedef {Object} loginDTO
 * @param {String} email - The user's credentials.
 * @param {string} password - The user's email.
 * @returns {Promise<UserModel>} - The user's information.
 */

export const login = async ({email, password}) => {
  const {data} = await client.post('/session', {email, password});
  return data;
};
