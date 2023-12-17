var express = require("express");
const adminController = require("../http/controllers/admin.controller");
var router = express.Router();

router.get("/", adminController.index);
router.get("/detail", adminController.detail);
router.get("/edit", function (req, res) {});
router.get("/edit", adminController.edit);
router.get("/manage/customer", adminController.customerManage);
router.get("/manage/photographer", adminController.photographerManage);
router.get("/manage/photographer/1", function (req, res) {
  res.render("admin/photographerDetail", {
    layout: "layouts/admin.layout.ejs",
  });
});

module.exports = router;
