var Book = require("../models/book.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all jobs
  app.get("/api/all", function(req, res) {
    JobSearch.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific book
  app.get("/api/:jobtitle", function(req, res) {
    JobSearch.findAll({
      where: {
        jobtitle: req.params.JobSearch
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all books of a specific genre
  app.get("/api/:location", function(req, res) {
    JobSearch.findAll({
      where: {
        location: req.params.JobSearch
      }
    }).then(function(results) {
      res.json(results);
    });
  });
}