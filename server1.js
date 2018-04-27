// Dependencies 

var express = require("express");
var bodyParser = require("body-parser");

// set up express app

var app = express();
var PORT = process.env.PORT || 8080;

// Require models for syncing
var db = require("./models");

// set up body parser to allow data parsing

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

// static directory

app.use(express.static("./public"));

// Routes

require("./routing/html-routes")(app);
require("./routing/post-api-routes")(app);
// Sync sequelize models and then start up the Express app

db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    })
});
