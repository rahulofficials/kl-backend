const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const routes = require("./routes/login");
const adminlogin = require("./routes/admin login")
const tourism = require("./routes/tourism")
const app = express()

require('dotenv').config()   // configuring the dot env 
require("./config/db")     // connecting database to server
const PORT = 3000 || process.env.PORT


 app.use("/adminlogin",adminlogin);
 
 app.use("/tourism",tourism);

// PORT
app.listen(PORT, () => {
    try {
        console.log(`Server Running  ${PORT}`)
    } catch (error) {
        console.log("Error In Running Server")
    }
})

app.use(express.json())
app.use(routes)