const Router = require("express");
const controller = require("../controllers/postController");
const authMiddleWare = require("../middleware/auth.middleware");

const multer = require('multer')




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'static/')
    },
    filename: (req, file, cb) => {
  // Возьмем оригинальное название файла, и под этим же названием сохраним его на сервере
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9 ) + ".jpg"
    cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

const upload = multer({storage: storage});


const router = new Router();


router.post('/add',[authMiddleWare, upload.single('postimage')], controller.addPost)
router.delete('/delete',[authMiddleWare], controller.deletePost);
router.get('/getbyuser',[authMiddleWare], controller.getPostsbyUser);
router.get('/getall',[authMiddleWare], controller.getAllPosts);






module.exports = router;