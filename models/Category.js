const Sequelize = require("sequelize");
const connexion = require('../config/database');

module.exports = connexion.define('category',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})