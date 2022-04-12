
// require Models
const Commande =require('../models/Command.js');
const User = require ('../models/User');
const Category =require('../models/Category');
const Product = require('../models/Product');
const CommandProduct = require('../models/ProductCommand');
// connexion database 
const connexion = require("../config/database");

//  _________________association _______________________

// association commande and commandProduct Many To many

Product.belongsToMany(Commande, {
    through: CommandProduct,
    as: "commands",
});;

// association Commande Product 

Commande.belongsToMany(Product, {
    through: CommandProduct,
    as: "products",
});;


// association  User and Commande 


User.hasMany(Commande, { foreignKey: 'clientId' })
User.hasMany(Commande, { foreignKey: 'livreurId' })

Commande.belongsTo(User, { as: 'client', foreignKey: 'clientId' });
Commande.belongsTo(User, { as: 'delivery', foreignKey: 'livreurId' });
// association Product and category 

Category.hasMany(Product);
Product.belongsTo(Category);

// Create table of model
connexion.sync({alter:true}).then(() => {
    console.log("Table Created !");
});


module.exports = {
    Commande,
    User,
    Category,
    Product,
    CommandProduct
}








