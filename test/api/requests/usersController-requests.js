const context = require('../context');

const PATH = '/public/v2/users';
const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.API_TOKEN}`,
};

const setHeaders = (request) => {
  return request
    .set('Accept', HEADERS.Accept)
    .set('Content-Type', HEADERS['Content-Type'])
    .set('Authorization', HEADERS.Authorization);
};

module.exports = {
  getUser: (userId) =>
    setHeaders(context.api.get(`${PATH}/${userId}`)),

  getUsers: () =>
    setHeaders(context.api.get(PATH)),

  postUser: (payload) =>
    setHeaders(context.api.post(PATH)).send(payload),

  deleteUser: (userId) =>
    setHeaders(context.api.delete(`${PATH}/${userId}`)),
};