module.exports = (req, res, next) => {
  if (!req.user) {
    return res.redirect("/portfolio");
  }
  //Nếu user đã login --> check token
  next();
};
