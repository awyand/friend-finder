// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Set up Express server
var app = express();
var PORT = process.env.PORT || 3000;

// Set up bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Use express.static to serve static public assets
app.use(express.static('./app/public/assets/'));

// Call APIRoutes and HTMLRoutes functions, passing express app as argument
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

// Start listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
