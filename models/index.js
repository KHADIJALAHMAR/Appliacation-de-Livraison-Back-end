
// require Models
const Commande =require('../models/Command.js');
const User = require ('../models/User');
const category =require('../models/Category');
const Product = require('../models/Product');
const CommandProduct = require('../models/ProductCommand');
// connexion database 
const connexion = require("../config/database");

//  _________________association _______________________

// association commande and commandProduct 

Product.belongsToMany(Commande, {
    through: CommandProduct,
    as: "commands",
});;

// association  User and Commande 


User.hasMany(Commande, { foreignKey: 'clientId' })
User.hasMany(Commande, { foreignKey: 'livreurId' })

Commande.belongsTo(User, { as: 'client', foreignKey: 'clientId' });
Commande.belongsTo(User, { as: 'delivery', foreignKey: 'livreurId' });
// association Product and category 

category.hasMany(Product);
Product.belongsTo(category);

// Create table of model
connexion.sync({ force: false}).then(() => {
    console.log("Table Created !");
});


module.exports = {
    Commande,
    User,
    category,
    Product
}








