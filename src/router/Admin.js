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
.delete(Admin.deleteUser)

// get Livreurs
router.route("/Livreurs")
.get(Admin.findAllLivreur)

// get Livreur By id  <Change status >
router.route("/Livreur/:id/:status")
.get(Admin.getLivreurById)







module.exports = router ;