// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Candidate = require("./employeesearch.js");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    Candidate.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/frontend", function(req, res) {
    Candidate.findAll({
      where: {
        title: 'Frontend Developer'
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/backend", function(req, res) {
    Candidate.findAll({
      where: {
        title: 'Backend Developer'
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/fullstack", function(req, res) {
    Candidate.findAll({
      where: {
        title: 'Fullstack Developer'
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/cyber", function(req, res) {
    Candidate.findAll({
      where: {
        title: 'Cyber Security'
      }
    }).then(function(results) {
      res.json(results);
    });
  });

};
