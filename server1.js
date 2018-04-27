// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 8080;

// Require models for syncing
var db = require("./models");

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// static directory

app.use(express.static("./public"));

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Routes

require("./routing/html-routes")(app);
require("./routing/post-api-routes")(app);
// Sync sequelize models and then start up the Express app

db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    })
});

