var db = require("../models");

module.exports = function(app) {
  // Find all Applicants and return them to the user with res.json
  app.get("/api/applicants", function(req, res) {
    db.Applicant.findAll({}).then(function(dbApplicant) {
      res.json(dbApplicant);
    });
  });

   app.get("/api/applicants/:specialty?", function(req, res) {
       var specialty = req.params.specialty;
       if (specialty==="frontend"){
        db.Applicant.findAll({
            where: {
              specialty: "Front End"
            }
          }).then(function(dbApplicant) {
            res.json(dbApplicant);
          });
       }
       else if (specialty==="backend"){
        db.Applicant.findAll({
            where: {
              specialty: "Back End"
            }
          }).then(function(dbApplicant) {
            res.json(dbApplicant);
          });
       }
       else if (specialty==="fullstack"){
        db.Applicant.findAll({
            where: {
              specialty: "Full Stack"
            }
          }).then(function(dbApplicant) {
            res.json(dbApplicant);
          });
       }
       else if (specialty==="cybersecurity"){
        db.Applicant.findAll({
            where: {
              specialty: "Cyber Security"
            }
          }).then(function(dbApplicant) {
            res.json(dbApplicant);
          });
       }
  });
};