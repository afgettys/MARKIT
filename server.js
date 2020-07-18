const express = require("express");
const PORT = process.env.PORT || 8080;
const db = require("./models");
const app = express();
const router = require("./routes/html-routes")

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/routes.js")(app)

app.use("/",router);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(
        `🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
      );
    });
});

