// var DataTypes = require("sequelize");

// var sequelize = require("../config/config.json");

module.exports = function(sequelize, DataTypes) {


var Candidate = sequelize.define("developers", {
 lastName: {
     type: DataTypes.STRING
 },
 firstName: {
     type: DataTypes.STRING
 },
 title: {
     type: DataTypes.STRING
 },
 street: {
     type: DataTypes.STRING
 },
 city: {
     type: DataTypes.STRING
 },
 state: {
     type: DataTypes.STRING
 },
 zip: {
     type: DataTypes.INTEGER
 },
 email: {
     type: DataTypes.STRING
 },
 experience: {
     type: DataTypes.STRING
 }
}, {
   timestamps: false
});


return Candidate;
// Candidate.sync()
}