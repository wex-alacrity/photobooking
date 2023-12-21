module.exports = (req, res, next) => {
  if (!req.user) {
    return res.redirect("/portfolio");
  }
  //Nếu user đã login --> check token
  // next();

  if (req.user.typeId === 1) {
    if (
      !(
        req.originalUrl.startsWith("/admin") ||
        req.originalUrl.startsWith("/portfolio")
      )
    ) {
      return res.redirect("/admin");
    }
  }

  if (req.user.typeId === 3) {
    if (
      !(
        req.originalUrl.startsWith("/customer") ||
        req.originalUrl.startsWith("/portfolio")
      )
    ) {
      return res.redirect("/customer");
    }
  }

  if (req.user.typeId === 2) {
    if (
      !(
        req.originalUrl.startsWith("/photographer") ||
        req.originalUrl.startsWith("/portfolio")
      )
    ) {
      return res.redirect("/photographer");
    }
  }
  next();
};
