const model = require("../../models/index");
const User = model.User;
module.exports = {
  login: async (req, res) => {
    const msg = req.flash("error");
    const msgType = msg ? "danger" : "success";
    return res.render("auth/login", {
      pageTitle: "Đăng nhập",
      msg,
      msgType,
      layout: "layouts/auth.layout.ejs",
    });
  },

  handleLogin: async (req, res) => {
    return res.redirect("/portfolio");
  },
  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/portfolio");
    });
  },
};
