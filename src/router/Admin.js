const express = require("express");
const router = express.Router();
const {Admin,ProductUpload}  =require('../controllers/index');


// ________________________Création Route Admin______________________________________________________________________________



// ------Product------


router.route("/Product")
.get(Admin.getProduct)
.delete(Admin.deleteProduct)
.put(Admin.updateProduct)
.post(ProductUpload.single("Product-image"),Admin.createProduct)

router.route("/Category")
// _____Add Category______
.post(Admin.creatCategory )
.get(Admin.getCategory)
.delete(Admin.deleteCategory)
.put(Admin.updateCategory)

//get Users

router.route("/Users")
.get(Admin.findAllUsers)

// get One User id 
router.route("/User/:id")
.get(Admin.findOne)

// get Livreurs
router.route("/Livreurs")
.get(Admin.findAllLivreur)

// get Livreur By id 
router.route("/Livreur/:id")
.get(Admin.getLivreurById)







module.exports = router ;