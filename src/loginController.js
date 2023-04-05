const loginService = require("./loginService");

const createLoginControllerFn = async (req,res)=>
{
    try 
    {
        console.log(req.body);
        var status = await loginService.createLoginDBService(req.body);
        console.log(status);

        if (status) {
            res.send({ "status" : true, "message": "User Created Succesfully"})
        } else {
            res.send({"status" : false, "message": "Error in Creating User"})
        }
    } 
    catch (error) 
    {
        console.log(error)
    }
}

var signInControllerFn = async(req,res)=>{
    var result = null;
    try {
    result = await loginService.signInDBService(req.body);
    if (result.status) {
        res.send({"status":true,"message":result.msg});
    } else {
        res.send({"status":false, "message":result.msg});
    }
    } catch (error) {
        console.log(error);
        res.send({"status":false,"message":error.msg});
    }
}

module.exports = { createLoginControllerFn, signInControllerFn }