const { loginModel } = require("../models/loginModel")
var key = '123456789trytrytry';
var encryptor = require('simple-encryptor')(key);

module.exports.createLoginDBService = (loginDetails) => {

    return new Promise(function myFn(resolve, reject) {

        var loginModelData = new loginModel(loginDetails);

        loginModelData.firstname = loginDetails.firstname;
        loginModelData.lastname = loginDetails.lastname;
        loginModelData.email = loginDetails.email
        loginModelData.password = loginDetails.password;
        var encrypted = encryptor.encrypt(loginDetails.password);
        loginModelData.password = encrypted;

        loginModelData.save(function resultHandle 
            (error, result){
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        })

    }
    )
}