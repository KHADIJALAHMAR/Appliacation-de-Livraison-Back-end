const express = require("express");
const router = express.Router();
const {AdminController } =require('../controllers');


// Création Route Admin*
// Route Product 
router.route("/Admin/create")
.post(
    // authorizeWithRole("admin"),
    Admins.createProduct);

router.route("/Admin/Products")
.get(AdminController.getProduct)
.put(
    // authorizeWithRole("admin"),
AdminController.updateProduct)
.delete(
    // authorizeWithRole("admin"),
    AdminController.deleteProduct)

// Route Cretion categorie 



// Route User
// router.route("Admin/user")
// .post(AdminController.createUser)
// .get(AdminController.getUsers)
// .get(AdminController.getUserById)
// .put(AdminController.updateUser)




module.export = router ;