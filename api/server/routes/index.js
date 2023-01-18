var FriendsController = require('../controllers/friends');

module.exports = function (app, express) {
  var api = express.Router();
  api.get('/friends', FriendsController.getFriendsList);

  api.get('/me', function (req, res) {
    res.send(req.decoded);
  });
  return api;
};
