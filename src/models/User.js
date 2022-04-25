
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
    type:Sequelize.STRING,
    allowNull :false ,
},
    email :{
    type:Sequelize.STRING,
    allowNull :false ,
    match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "invalid email format",
      ],
},

password :{
    type:Sequelize.STRING,
    allowNull :false ,
},

role :{
    type :Sequelize.STRING,
},
status :{
    type :Sequelize.INTEGER,
    defaultValue: null,
}


});