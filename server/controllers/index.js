var orm = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll({include: [User]})
      .then((err, results) => {
        res.json(results);
      })
    },
    post: function (req, res) {
      User.findOrCreate({user_name: req.body.user_name})
      .then((err, user) => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        var params = {
          user_name: user.id,
          room_name: req.body.room_name,
          created_at: dateTime,
          message_text: req.body.message_text
        };
        Message.create(params)
        .then((err, results) => {
          res.sendStatus(201)
        })
      })
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      User.findAll()
        .then(function (err, results) {
          res.json(results);
        });
    },
    post: function (req, res) {
      User.create({user_name: req.body.user_name})
        .then(function(err, user) {
          res.sendStatus(201);
        });
    }
  }
};

