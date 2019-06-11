const express = require('express')
const router = express.Router();
const userController = require('../controller/UserController');

router.get('/user', userController.UserList);
router.get('/user/:id', userController.getUserById);
router.post('/user', userController.AddUser);

module.exports = router;