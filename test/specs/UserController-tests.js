const userControllerRequests = require('../api/requests/usersController-requests');
const userControllerValidators = require('../api/validators/userController-validators');
const generateRandomUser = require('../helpers/generateRandomUser');

let userId;
let payload = generateRandomUser();


it('Get users', async function () {
  const response = await userControllerRequests.getUsers();
  userControllerValidators.verifyGetUsers(response);
});

it('Post user', async function () {
  const response = await userControllerRequests.postUser(payload);
  userControllerValidators.verifyPostUser(response);
  userId = response.body.id;
});

it('Get user', async function () {
    const response = await userControllerRequests.getUser(userId);
    userControllerValidators.verifyGetUser(response);
});

it('Delete user', async function () {
  const response = await userControllerRequests.deleteUser(userId);
  await userControllerValidators.verifyDeleteUser(response);

  process.on('exit', () => {
    console.log(`\nUser ${userId} was successfully deleted\n`);
  });
});


