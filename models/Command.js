const Sequelize = require("sequelize");
const connexion = require('../config/database');
module.exports = connexion.define('commande',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    total: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})