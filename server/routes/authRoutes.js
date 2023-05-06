const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config")
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator");
const controller = require("../controllers/authController");

const router = new Router();


router.post('/reg',
[
    check('email', "Uncorrect email").isEmail(),
    check('password', "Password must be longer than 6 and shorter than 12").isLength({min:6, max:12})
], 
controller.registration)


router.post('/login', controller.login);



module.exports = router;