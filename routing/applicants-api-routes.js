var db = require("../models");

module.exports = function(app) {
  // Find all Applicants and return them to the user with res.json
  app.get("/api/applicants", function(req, res) {
    db.developers.findAll({}).then(function(dbdevelopers) {
      res.json(dbdevelopers);
    });
  });

   app.get("/api/applicants/:specialty?", function(req, res) {
       var specialty = req.params.specialty;
       if (specialty==="frontend"){
        db.developers.findAll({
            where: {
              title: "Frontend Developer"
            }
          }).then(function(dbdevelopers) {
            res.send(dbdevelopers);
          });
       }
       else if (specialty==="backend"){
        db.developers.findAll({
            where: {
              title: "Backend Developer"
            }
          }).then(function(dbdevelopers) {
            res.json(dbdevelopers);
          });
       }
       else if (specialty==="fullstack"){
        db.developers.findAll({
            where: {
              title: "Fullstack Developer"
            }
          }).then(function(dbdevelopers) {
            res.json(dbdevelopers);
          });
       }
       else if (specialty==="cybersecurity"){
        db.developers.findAll({
            where: {
              title: "Cyber Security"
            }
          }).then(function(dbdevelopers) {
            res.json(dbdevelopers);
          });
       }
  });
};