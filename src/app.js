require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var expressLayouts = require("express-ejs-layouts");
var moment = require("moment");

var passport = require("passport");
var session = require("express-session");
const flash = require("connect-flash");

const authRouter = require("./routes/auth");
const customerRouter = require("./routes/customers");
const adminRouter = require("./routes/admin");
const photographerRouter = require("./routes/photographer");
const porfolioRouter = require("./routes/portfolio");
const model = require("../src/models/index");

const authMiddleware = require("../src/http/middlewares/auth.middleware");
const localPassport = require("../src/passport/localPassport");

var app = express();

app.locals.formatDate = function (date) {
  return moment(date).format("DD/MM/YYYY HH:mm");
};

app.use(
  session({
    secret: "quangminh",
    resave: true,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  const user = await model.User.findByPk(id);
  done(null, user);
});
passport.use("local", localPassport);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/dashboard.layout.ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/portfolio", porfolioRouter);
app.use("/auth", authRouter);
app.use(authMiddleware);
app.use("/admin", adminRouter);
app.use("/customer", customerRouter);
app.use("/photographer", photographerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
