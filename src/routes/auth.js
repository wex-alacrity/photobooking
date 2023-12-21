const passport = require("passport");
const AuthController = require("../http/controllers/auth.controller");
const GuestMiddleware = require("../http/middlewares/guest.middleware");
const jwt = require("jsonwebtoken");

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
router.get("/register", AuthController.register);
router.get("/forgot", AuthController.forgot);
router.post("/forgot", AuthController.handleForgot);
router.get(
  "/verify/:token",
  GuestMiddleware,
  function (req, res, next) {
    const { token } = req.params;
    try {
      var decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded) {
        next();
      }
    } catch (error) {
      res.send("<h1>Link xác thực đã hết hạn hoặc không tồn tại</h1>");
    }
  },
  AuthController.reset
);
router.post(
  "/verify/:token",
  GuestMiddleware,
  function (req, res, next) {
    const { token } = req.params;

    try {
      var decoded = jwt.verify(token, "secret");
      if (decoded) {
        next();
      }
    } catch (err) {
      res.send("<h1>Link xác thực đã hết hạn hoặc không tồn tại</h1>");
    }
  },
  AuthController.handleReset
);

module.exports = router;
