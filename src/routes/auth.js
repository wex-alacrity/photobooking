var express = require("express");
const authController = require("../http/controllers/auth.controller");
var router = express.Router();

/* GET home page. */
router.get("/login", authController.index);
router.get("/register", authController.register);
router.get("/forgot", authController.forgot);
router.get("/reset", authController.reset);

module.exports = router;
