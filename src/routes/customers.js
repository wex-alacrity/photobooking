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
router.get("/review", function (req, res, next) {
  res.render("customers/review");
});
router.get("/reviewDetail", function (req, res, next) {
  res.render("customers/reviewDetail");
});
module.exports = router;
