const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Créate Route Login

router.route('/login')
.get(UserController.Login)
.post(UserController.validation_login);

// Créate Route Register

router.route('/register')
.get(UserController.Register )
.post(UserController.validation_register);
