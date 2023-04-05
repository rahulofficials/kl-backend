const { loginModel } = require("../models/loginModel")
var key = '123456789trytrytry';
var encryptor = require('simple-encryptor')(key);

module.exports.createLoginDBService = (loginDetails) => {

  const loginModelData = new loginModel(loginDetails);

  loginModelData.firstname = loginDetails.firstname;
  loginModelData.lastname = loginDetails.lastname;
  loginModelData.email = loginDetails.email;
  loginModelData.password = encryptor.encrypt(loginDetails.password);
  return loginModelData.save()
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
}

module.exports.signInDBService = (loginDetails) => {
  return loginModel.findOne({ email: loginDetails.email }, (errorValue, result) => {
    if (errorValue) 
    {
      console.log("Invalid Data")
      return false;
    } 
    else 
    {
      if (result != undefined && result != null) 
      {
        var decrypted = encryptor.decrypt(result.password);
        if (decrypted == loginDetails.password) 
        {
          console.log("Student Validated Succesfully")
          return true;
        } 
        else 
        {
          console.log("Student Validation Failed")
          return false
        }
      } 
      else 
      {
        console.log("Error")
        return false
      }
    }
  });
};