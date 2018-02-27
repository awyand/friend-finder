// Dependencies
var path = require('path');

// Pull in data from friends.js
var friendsData = require('../data/friends');

// Export function for handling API requests (will be required in server.js)
module.exports = function(app) {
  // Handle get requests for api/friends
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
}
