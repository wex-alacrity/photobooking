module.exports = {
  index: (req, res) => {
    return res.render("photographer/index", {
      layout: "layouts/photographer.layout.ejs",
    });
  },
};
