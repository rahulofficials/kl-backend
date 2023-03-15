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

module.exports = { createLoginControllerFn }