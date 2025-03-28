const genericValidators = require('./generic-validators');


module.exports = {
    verifyGetUsers: (response) => {
        genericValidators.checkStatusCode(response, 200);
        genericValidators.checkUser(response);
    },
    verifyPostUser: (response) => {
        genericValidators.checkStatusCode(response, 201);
        genericValidators.checkPostUser(response);
    },
    verifyGetUser: (response) => {
        genericValidators.checkStatusCode(response, 200);
        genericValidators.checkGetUser(response);
    },
    verifyDeleteUser: (response) => {
        genericValidators.checkStatusCode(response, 204);
    }
    
};