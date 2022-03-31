const express = require("express");
const router = express.Router();
const AdminController  =require('../controllers/AdminContoller');


// ________________________Création Route Admin______________________________________________________________________________


// ------Product------

router.route("Create")
.post(AdminController.createProduct)
// _____Add Category______
.post(AdminController.creatCategory)

router.route("Product")
.get(AdminController.getProduct)
.delete(AdminController.deleteProduct)
router.route("Product/:id")
.put(AdminController.updateProduct)

// ------categorie------

router.route("Category")
.get(AdminController.getCategory)
.put(AdminController.updateCategory)
.delete(AdminController.deleteCategory)



module.exports = router ;