const router = require("express").Router();
const path = require("path")

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

router.get("/lists", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/lists.html"));
});

module.exports = router;
