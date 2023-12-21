var express = require("express");
const porfolioController = require("../http/controllers/porfolio.controller");
var router = express.Router();

/* GET users listing. */
router.get("/", porfolioController.index);
router.get("/services", function (req, res, next) {
  if (req.user) {
    var userName = req.user.name;
    var userType = req.user.typeId;
  }
  res.render("portfolio/service", {
    layout: "layouts/portfolio.layout.ejs",
    userName,
    userType,
  });
});
router.get("/services/portrait", function (req, res, next) {
  if (req.user) {
    var userName = req.user.name;
    var userType = req.user.typeId;
  }
  res.render("portfolio/portrait", {
    layout: "layouts/portfolio.layout.ejs",
    userName,
    userType,
  });
});
router.get("/services/wedding", function (req, res, next) {
  if (req.user) {
    var userName = req.user.name;
    var userType = req.user.typeId;
  }
  res.render("portfolio/wedding", {
    layout: "layouts/portfolio.layout.ejs",
    userName,
    userType,
  });
});
router.get("/services/architechture", function (req, res, next) {
  if (req.user) {
    var userName = req.user.name;
    var userType = req.user.typeId;
  }
  res.render("portfolio/architechture", {
    layout: "layouts/portfolio.layout.ejs",
    userName,
    userType,
  });
});
router.get("/services/landscape", function (req, res, next) {
  if (req.user) {
    var userName = req.user.name;
    var userType = req.user.typeId;
  }
  res.render("portfolio/landscape", {
    layout: "layouts/portfolio.layout.ejs",
    userName,
    userType,
  });
});
module.exports = router;
