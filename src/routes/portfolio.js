var express = require("express");
const porfolioController = require("../http/controllers/porfolio.controller");
var router = express.Router();

/* GET users listing. */
router.get("/", porfolioController.index);
router.get("/service", function (req, res, next) {
  res.render("portfolio/service", { layout: "layouts/portfolio.layout.ejs" });
});
router.get("/service/portrait", function (req, res, next) {
  res.render("portfolio/portrait", { layout: "layouts/portfolio.layout.ejs" });
});
module.exports = router;
