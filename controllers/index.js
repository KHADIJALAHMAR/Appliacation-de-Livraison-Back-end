const Admin =require('./AdminContoller');
const User =require ('./UserController');
const Commande =require('./CommandeController');

// requiring multer
const path = require('path');
const multer = require('multer');

// storage function
function manageStorage(pathName){
    return multer.diskStorage({   
        destination: function(req, file, cb) { 
        cb(null, pathName );    
        }, 
        filename: function(req, file, cb) { 
        cb(null , `image_${Date.now()}.${path.extname(file.originalname).toLowerCase()}`);   
        }
     })
}

// filter function
const fFilter = (req, file, cb) =>{    
    // Allowed ext
    const filetypes = /jpeg|jpg|png/;

   // Check ext
    const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());
   // Check mime
const mimetype = filetypes.test(file.mimetype);

if(mimetype && extname){
    return cb(null,true);
} else {
    cb('Error: Images Only!');
}
}


const ProductUpload = multer({ fileFilter: fFilter , storage: manageStorage(path.join(path.dirname(__dirname) , 'public' , 'assets' , 'uploads' , 'images' , 'Product_images')) })


module.exports ={
    Admin,
    User,
    ProductUpload,
    Commande,
    
}