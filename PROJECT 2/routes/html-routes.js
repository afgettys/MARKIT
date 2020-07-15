//var path = require('path');

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
};


// Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  //app.get("/", function(req, res) {
    //res.sendFile(path.join(__dirname,    "../public/view.html"));
  /*});

  // add route loads the add.html page,
  // where users can enter new characters to the db
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  // all route loads the all.html page,
  // where all characters in the db are displayed
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });
