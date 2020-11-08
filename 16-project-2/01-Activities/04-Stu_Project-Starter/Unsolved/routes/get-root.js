var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
   
    // read db
  db.Example.findAll({}).then(function(dbExamples) {
    res.render("index", {
      msg: "Welcome!",
      examples: dbExamples
    });
  });
 
  });
}
