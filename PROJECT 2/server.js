const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/routes.js")(app)

app.listen(PORT, function() {
console.log("Server listening on port " + PORT);
});