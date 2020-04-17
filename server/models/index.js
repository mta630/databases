var db = require('../db');


//  / client ===> app.js ====> router ====> controllers ====> models ====> access db \
//  \ client <=== app.js <==== router <==== controllers <==== models <==== access db /

module.exports = {
  messages: {
    get: function (callback) {
      console.log('hello');
      db.query('SELECT * from messages', (err, rows, fields) => {
        if (err) {
          throw err;
        }
        callback(err, rows);
      });
      // SELECT user_name, room_name, message_text, created_at FROM messages JOIN users ON messages.user_id = users.id
    },
    post: function (message, callback) {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;

      db.query(`INSERT INTO messages (room_name , user_id, created_at, message_text) VALUES ("${message.roomname}", (SELECT id FROM users WHERE "${message.username}" = users.user_name limit 1), "${dateTime}", "${message.message}")`, (err, rows, fields) => {
        callback(err, rows);
      });

    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query(`SELECT * from users`, (err, rows) => {
        if (err) {
          console.log(err);
        }
        callback(err, rows);
      })
    },
    post: function (data, callback) {
      db.query(`INSERT INTO users (user_name) VALUES ("${data.username}")`, (err, rows) => {
        if (err) {
          console.log(err);
        }
        callback(err, rows);
      })
    }
  }
};

