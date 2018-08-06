(function () {
  'use strict';
  // get the required models and db connection
  var friends = require('../database');

  module.exports = {
    getFriendsList: function (req, res) {
      res.json(friends.filter(friend => (friend.name.toLowerCase().includes(req.query.q) || friend.handle.toLowerCase().includes(req.query.q))));
    }
  };
})();