var express = require('express');
var router = express.Router();
let userController = require ('../controllers/usersControllers')
/* GET users listing. */
router.get('/login', userController.login)
router.get('/profile/:id', userController.profile)
router.get('/register', userController.register)
router.get('/edit', userController.edit)
module.exports = router;
