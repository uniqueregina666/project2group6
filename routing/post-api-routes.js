// dependencies

// requiring our models

var db = require("../models");

module.exports = function(app){

    // route to get all posts

    app.get("/api/posts", function(req, res){
       
        db.JobPost.findAll({
        }).then(function(dbJobPost){
            res.json(dbJobPost);
        });
    });
    // GET route to get all applicant's data

    app.get("/api/applicants", function(req, res) {
        db.applicants.findAll({}).then(function(dbAuthor) {
          res.json(dbAuthor);
        });
      });

    // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    db.JobPost.create(req.body).then(function(dbJobPost) {
      res.json(dbJobPost);
    });
  });

};