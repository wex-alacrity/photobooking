module.exports = {
  index: (req, res) => {
    res.render("auth/login", { layout: "layouts/auth.layout.ejs" });
  },
  register: (req, res) => {
    res.render("auth/register", { layout: "layouts/auth.layout.ejs" });
  },
  forgot: (req, res) => {
    res.render("auth/forgot", { layout: "layouts/auth.layout.ejs" });
  },
  reset: (req, res) => {
    res.render("auth/resetPassword", { layout: "layouts/auth.layout.ejs" });
  },
};
