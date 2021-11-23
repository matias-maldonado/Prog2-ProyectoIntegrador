var express = require('express');
var router = express.Router();
const postController = require('../controllers/postController')
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })
/* GET home page. */
router.get('/add', postController.add)
router.post('/add', upload.single('img') ,postController.store)
router.get('/detalle/:id', postController.detalle)
router.post ("/comentar/:id", postController.comentar)
module.exports = router;
