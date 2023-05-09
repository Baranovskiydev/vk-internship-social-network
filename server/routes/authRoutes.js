const Router = require("express");
const {check} = require("express-validator");
const controller = require("../controllers/authController");
const authMiddleWare = require("../middleware/auth.middleware");


const router = new Router();


router.post('/reg',
[
    check('email', "Uncorrect email").isEmail(),
    check('password', "Password must be longer than 6 and shorter than 12").isLength({min:6, max:12})
], 
controller.registration)


router.post('/login', controller.login);

router.get('/auth',authMiddleWare, controller.auth)



module.exports = router;