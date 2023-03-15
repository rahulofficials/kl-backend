var express = require("express");


var loginController = require("../src/loginController");
const router = express.Router();

router.route('/user/register').post(loginController.createLoginControllerFn);



module.exports = router;