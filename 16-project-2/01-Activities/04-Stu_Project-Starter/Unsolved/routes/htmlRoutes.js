var db = require("../models");

module.exports = function(app) {
  // home
  require('./get-root')(app);

  // get example
  require('./get-example')(app);

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
