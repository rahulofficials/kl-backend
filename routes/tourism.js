const express = require("express");
const router = express.Router()
const { contactModel } = require("../models/contactModel")


router.post("/query",(req,res)=>{
    var data=req.body
    var contactObject = new contactModel(data)
    contactObject.save(
        (error,data)=>{
            if (error) {
                res.send("Something went Wrong")
            } else {
                res.send(data)
            }
        }
    )
})