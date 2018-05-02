// Dependencies 

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// set up express app

var app = express();
var PORT = process.env.PORT || 8080;

// Require models for syncing
var db = require("./models");
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// set up body parser to allow data parsing

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

// static directory

app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Routes
require("./routing/applicants-api-routes")(app);
require("./routing/html-routes")(app);
require("./routing/post-api-routes")(app);
require("./routing/jobsearch-routes")(app);
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Sync sequelize models and then start up the Express app

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    })
});
