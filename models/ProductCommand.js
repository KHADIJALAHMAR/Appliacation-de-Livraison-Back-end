const Sequelize = require("sequelize");
const connexion = require('../config/database');

module.exports = connexion.define('products_commande',{
    id :{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate:{
        notEmpty:true,
        }
    },

    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    quantities: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    total: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }

})