// dependencies

// requiring our models

var db = require("../models");

module.exports = function(app){

    // route to get all posts

    app.get("/api/posts", function(req, res){
        var query = {};
        if (req.query.JobPost_id) {
            query.JobPostId = req.query.JobPost_id;
        }
        db.JobPost.findAll({
            where: query
        }).then(function(dbJobPost){
            res.json(dbJobPost);
        });
    });
    // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    db.JobPost.create(req.body).then(function(dbJobPost) {
      res.json(dbJobPost);
    });
  });

};