const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")

username="admin@gmail.com";
password="admin1234"

router.post("/login",(req,res)=>{
    let userData = req.body
console.log("userData",userData)
if (username!=userData.uname) {
    res.status(401)
    console.log("invalid User Login")
    
} else 
    if (password!=userData.password) {
        res.status(401)
        console.log("invalid password")
        
        
    } else {
        let payload={subject:username+password}
        let token=jwt.sign(payload,'secretKey')
        console.log(token)
        res.status(200).send({token})

        
    }
    


})

module.exports = router;