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

  // Handle post requests for api/friends
  app.post("/api/friends", function(req, res) {

    // Define compareScores function
    function compareScores(array1, array2) {
      var totalDifference = 0;

      for (j = 0; j < array1.length; j++) {
        totalDifference += Math.abs(parseInt(array1[j]) - parseInt(array2[j]));
      }

      return totalDifference;
    }

    // Save userInput to newFriend object
    var newFriend = req.body;
    // Save newFriend scores to a varaible
    var newFriendScores = newFriend.scores;

    // Initialize best match info
    bestMatchIndex = null;
    bestMatchDifference = 9999;

    // Loop through each friend in friendsData
    for (i = 0; i < friendsData.length; i++) {
      // Save current friend scores to a variable
      var thisFriendScores = friendsData[i].scores;
      // Save result of compareScores for current friend to variable
      var thisFriendDifference = compareScores(newFriendScores,thisFriendScores);
      // If bestMatchIndex is null or if current comparison is better than best match
      if (bestMatchIndex === null || thisFriendDifference < bestMatchDifference) {
        // Set bestMatch variables appropriately
        bestMatchIndex = i;
        bestMatchDifference = thisFriendDifference;
      }
    }

    // Add newFriend to friendsData array
    friendsData.push(newFriend);

    console.log(friendsData[bestMatchIndex]);

    // Respond with best match object
    res.json(friendsData[bestMatchIndex]);
  });
}
