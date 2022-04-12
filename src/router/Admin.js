const express = require("express");
const router = express.Router();
const {Admin,ProductUpload}  =require('../controllers/index');


// ________________________Création Route Admin______________________________________________________________________________


// ------Product------

router.route("/Create")

router.route("/Product")
.get(Admin.getProduct)
.delete(Admin.deleteProduct)
.put(Admin.updateProduct)
.post(ProductUpload.array("Product-image"),Admin.createProduct)

// ------categorie------

router.route("/Category")
// _____Add Category______
.post(Admin.creatCategory )
.get(Admin.getCategory)
.delete(Admin.deleteCategory)
.put(Admin.updateCategory)



module.exports = router ;