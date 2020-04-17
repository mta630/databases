var mysql = require('mysql');
require('dotenv').config();
var Sequelize = require('sequelize');
var orm = new Sequelize('chat', 'mta630', process.env.password, {
  dialect: 'mysql'
});

// Create a database connection and export it from this file.
// You will need to connect with the Users "root", no password,
// and to the database "chat".


var Users = orm.define('Users', {
  user_name : Sequelize.STRING
})

var Messages = orm.define('Messages', {
  user_id : Sequelize.INTEGER,
  room_name: Sequelize.STRING,
  message_text: Sequelize.STRING,
  created_at: Sequelize.STRING
})



Messages.belongsTo('Users');
Users.hasMany('Messages');

Users.sync();
Messages.sync();

exports.Users = Users;
exports.Messages = Messages;