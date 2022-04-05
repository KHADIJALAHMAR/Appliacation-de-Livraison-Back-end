const express = require('express')
const router = express.Router()
const CommandeController = require('../controllers/CommandeController');
const authMiddlwer =require('../middlewares/AuthorizeUser');

router
    .route('/')
    .get(CommandeController.get_Commande)

router.route('/create')
    .post( authMiddlwer.authorizeToken,CommandeController.createCommand)

router
    .route('/update')
    .post(CommandeController.update_Commande)

router
    .route('/:id')
    .get(CommandeController.getCommandById)

// router
//     .route('/:id/set/delivery/:userid')
//     .get(CommandeController.set_delivery)

// router
//     .route('/status/change/:id/:status')
//     .get(CommandController.status_change)

module.exports = router;