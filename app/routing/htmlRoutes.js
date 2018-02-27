// Dependencies
var path = require('path');

// Export function for handling HTTP requests (will be required in server.js)
module.exports = function(app) {
  // Handle get requests for root route
  app.get('/', function(req, res) {
    // Send home.html
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  // Handle get requests for survey route
  app.get('/survey', function(req, res) {
    // Send survey.html
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });
}
