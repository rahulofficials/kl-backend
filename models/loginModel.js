const mongoose = require ("mongoose");

const loginModel = mongoose.model("customers",mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }

    }
))

module.exports = {loginModel}