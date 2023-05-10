const Router = require("express");
const controller = require("../controllers/userController");
const authMiddleWare = require("../middleware/auth.middleware");


const router = new Router();


router.post('/reg',authMiddleWare, 
controller)






module.exports = router;