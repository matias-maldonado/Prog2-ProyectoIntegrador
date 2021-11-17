var express = require('express');
var router = express.Router();
let userController = require ('../controllers/usersControllers')
/* GET users listing. */
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/users')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })
router.get('/login', userController.login)
router.post('/login', userController.loginPost)
router.get('/profile/:id', userController.profile)
router.get('/register', userController.register)
router.post('/register',upload.single('img'), userController.store)
router.get('/edit', userController.edit)
module.exports = router;
