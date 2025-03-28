const Chance = require('chance');
const chance = new Chance();

const generateRandomUser = () => {
  const user = {
    name: chance.name(),
    gender: chance.gender().toLowerCase(),
    email: chance.email({ domain: 'test.com' }),
    status: 'active'
  };

  console.log('Generated user:', user);
  return user;
};

module.exports = generateRandomUser;


