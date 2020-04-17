var mysql = require('mysql');
require('dotenv').config()

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'mta630',
  password: process.env.password,
  database: 'chat'
});

dbConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected successfully!')
  }
})

module.exports = dbConnection;