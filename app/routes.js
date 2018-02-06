var express = require("express");
var router = express.Router();

// Route index page
router.get("/", function(req, res) {
  res.render("index.html");
});

// add your routes here

router.post("/v6/prepare", function(req, res) {
  if (req.body.attendhpcds === "no") {
    res.redirect("/v6/no-claims");
  }
  res.redirect("/v6/prepare");
});

module.exports = router;
