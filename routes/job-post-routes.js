// Dependencies

var db = require("../models");

// Routes 

module.exports = function(app) {

// GET route for getting all of the posts 
app.get("/api/posts", function(req, res){
    var query = {};
    if (req.query.JobPost.JobPost_id) {
        query.JobPost.JobPost_id = req.query.JobPost_id
    }
    db.JobPost.findAll({
        where: query
    }).then(function(dbJobPost){
        res.json(dbJobPost);
    });
});

// POST route to add new posts to the db

    app.post("/api/posts", function(req, res){
        db.JobPost.create(req.body).then(function(dbJobPost){
            res.json(dbJobPost);
        });
    });

 // DELETE route to delete posts from the database
    
    app.delete("/api/posts/:id", function(req, res){
        db.JobPost.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbJobPost){
            res.json(dbJobPost);
        });
    });

 //  PUT route for updating posts

    app.put("/api/posts", function(req, res) {
        db.JobPost.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbJobPost) {
          res.json(dbJobPost);
        });
      });


};