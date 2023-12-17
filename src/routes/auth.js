const passport = require("passport");
const AuthController = require("../http/controllers/auth.controller");
const GuestMiddleware = require("../http/middlewares/guest.middleware");

var express = require("express");
var router = express.Router();

router.get("/login", GuestMiddleware, AuthController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
  }),
  AuthController.handleLogin
);
router.get("/logout", AuthController.logout);

module.exports = router;
