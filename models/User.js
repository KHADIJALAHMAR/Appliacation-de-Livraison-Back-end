
const Sequelize = require("sequelize");
const connexion = require('../config/database');

module.exports = connexion.define("users" ,{
id : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    validate:{
    notEmpty:true,
    }
},
username :{
    type:Sequelize.STRING(49),
    allowNull :false ,
    unique :true ,
},
    email :{
    type:Sequelize.STRING(50),
    allowNull :false ,
    unique :true ,
},
password :{
    type:Sequelize.STRING(33),
    allowNull :false ,
},
role :{
    type :Sequelize.INTEGER
},

});