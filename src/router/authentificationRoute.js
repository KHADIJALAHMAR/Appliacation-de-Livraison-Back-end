const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Créate Route Login

router.route('/login')
.post(UserController.handleLogin);


// Créate Route Register

router.route('/register')
.post(UserController.handleRegister);


module.exports = router;
