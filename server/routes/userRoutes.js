const Router = require("express");
const {check} = require("express-validator");
const controller = require("../controllers/userController");
const authMiddleWare = require("../middleware/auth.middleware");
const multer = require('multer');
const upload = multer();

const router = new Router();


router.post('/user',authMiddleWare, controller.getUser);
router.post('/find',authMiddleWare,controller.findUsers);
router.post('/add',authMiddleWare,controller.addFriend);
router.post('/remove',authMiddleWare,controller.removeFriend);
router.post('/edit',[authMiddleWare, upload.none()],controller.editUser);





module.exports = router;