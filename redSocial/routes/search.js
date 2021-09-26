var express = require('express');
var router = express.Router();
const searchController = require('../controllers/searchController')

/* GET home page. */
router.get('/', searchController.index)
module.exports = router;
