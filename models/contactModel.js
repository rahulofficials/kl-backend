const mongoose = require("mongoose")

const contactModel = mongoose.model("contacts",mongoose.Schema(
    {
        uemail:{
            type:String,
            required:true
        },
        umsg:{
            type:String,
            required:true
        }
    }
))

module.exports = { contactModel } 