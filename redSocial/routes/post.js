var express = require('express');
var router = express.Router();
const postController = require('../controllers/postController')

/* GET home page. */
router.get('/add', postController.add)
router.get('/detalle', postController.detalle)
module.exports = router;
