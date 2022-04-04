const express = require('express')
const router = express.Router()
const CommandeController = require('../controllers/CommandeController');

router
    .route('/')
    .get(CommandeController.get_Commande)

router.route('/create')
    .post(CommandeController.createCommand)

router
    .route('/update')
    .post(CommandeController.update)

// router
//     .route('/:id')
//     .get(CommandeController.get)

// router
//     .route('/:id/set/delivery/:userid')
//     .get(CommandeController.set_delivery)

// router
//     .route('/status/change/:id/:status')
//     .get(CommandController.status_change)

module.exports = router;