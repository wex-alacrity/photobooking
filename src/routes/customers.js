var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("customers/booking");
});
router.get("/create", function (req, res, next) {
  res.render("customers/create");
});
router.get("/detail", function (req, res, next) {
  res.render("customers/detail");
});
module.exports = router;
