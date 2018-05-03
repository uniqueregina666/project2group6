// var JobSearch = require("../models/jobsearch.js");
var db = require("../models/");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all jobs
  app.get("/api/all", function(req, res) {
    db.JobSearch.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific book
  app.get("/api/:jobtitle", function(req, res) {
    db.JobSearch.findAll({
      where: {
        jobtitle: req.params.jobtitle
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
