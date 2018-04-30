
// Routes

var db = require("../models");

module.exports = function (app) {

      // GET route for getting all of the posts
  app.get("/api/jobssearch", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Post.findAll({}).then(function(result){
      res.json(result);
    })
  });

  // Get route for returning posts of a specific category
  app.get("/api/jobssearch/category/:category", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Post.findAll({
      where: {
        jobtitle: req.params.jobtitle,
        location: req.params.location
      }
    }).then(function(result){
      res.json(result);
    })
  });
}