var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          console.log(err);
        }
        console.log("THIS IS THE THING ", JSON.stringify(data[0]));
        res.json(data);
      })
    },
    post: function (req, res) {
      models.messages.post(req.body, (err, data) => {
        if (err) {
          console.log(err);
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) {
          console.log(err)
        }
        res.json(data);
      })
    },
    post: function (req, res) {
      models.users.post(req.body, (err, data) => {
        if (err) {
          console.log(err);
        }
        res.sendStatus(201);
      })
    }
  }
};

