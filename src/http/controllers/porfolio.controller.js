module.exports = {
  index: (req, res) => {
    if (req.user) {
      var userName = req.user.name;
      var userType = req.user.typeId;
    }
    return res.render("portfolio/index2", {
      layout: "layouts/portfolio.layout.ejs",
      userName,
      userType,
    });
  },
};
