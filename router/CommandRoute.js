const express = require('express')
const router = express.Router()
const {CommandeController} = require('../models/index');

// router
//     .route('/')
//     .get(CommandeController.list)

router
    .route('/create')
    .post(CommandeController.create)

router
    .route('/update/:id')
    .post(CommandeController.update)

router
    .route('/:id')
    .get(CommandeController.get)

// router
//     .route('/:id/set/delivery/:userid')
//     .get(CommandeController.set_delivery)

// router
//     .route('/status/change/:id/:status')
//     .get(CommandController.status_change)

module.exports = router;