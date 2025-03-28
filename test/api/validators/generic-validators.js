const checkStatusCodeTemplate = function (response, validateCode) {
    response.status.should.equal(validateCode, `Got a status code of ${response.status} 
        when expecting a status code of ${validateCode} ${response.request.url}`);
};

const userSchema = {
    "id": Number,
    "name": String,
    "email": String,
    "gender": String,
    "status": String
}

module.exports = {

    checkStatusCode: (response, statusCode) => checkStatusCodeTemplate(response, statusCode),    
    checkUser: (response) => {
        for (const user of response.body) {
            user.should.matchPattern(userSchema);
        }
    },
    checkPostUser: (response) => {
        response.body.should.matchPattern(userSchema);
    },
    checkGetUser: (response) => {
        response.body.should.matchPattern(userSchema);
    },
    
}