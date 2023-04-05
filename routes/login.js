var express = require("express");


var loginController = require("../src/loginController");
const router = express.Router();

router.route('/user/register').post(loginController.createLoginControllerFn);
router.route('/user/login').post(loginController.signInControllerFn)


module.exports = router;