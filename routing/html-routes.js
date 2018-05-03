var path = require("path");
var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

      app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/survey.html"));
      });

      app.get("/employer", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/employer.html"));
      }); 

      app.get("/employee", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/employee.html"));
      }); 

      app.get("/frontend", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/frontend.html"));
      }); 

      
    app.get("/hire", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/jobPosting.html"));
      });

   
      app.get("/jobsearch", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/indeed.html"));
      }); 

      app.get("/employer/search", function(req, res) {
        res.sendFile(path.join(__dirname, "../app/public/employeesearch.html"));
      });
};