const express = require('express')
const router = express.Router()
const CommandeController = require('../controllers/CommandeController');
const authMiddlwer =require('../middlewares/AuthorizeUser');
// const authorizeWithRole = require('../middlewares/AuthorizeUser')


router
    .route('/')
    .get(CommandeController.get_Commande)

router.route('/create')
    .post(authMiddlwer.authorizeToken,authMiddlwer.authorizeWithRole("livreur"),CommandeController.createCommand)

router
    .route('/update')
    .post(CommandeController.update_Commande)

router
    .route('/:id')
    .get(CommandeController.getCommandById)

    router
    .route('/get/:id/:livreurId')
    .get(CommandeController.UpdateLivreurId)

router
    .route('/status/:id/:status')
    .get(CommandeController.set_status)

module.exports = router;