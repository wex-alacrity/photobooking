var express = require("express");
const adminController = require("../http/controllers/admin.controller");
const { route } = require("./customers");
var router = express.Router();

router.get("/", adminController.index);
router.get("/detail/:id", adminController.detail);
router.get("/edit/:id", adminController.edit);
router.post("/edit/:id", adminController.handleEdit);
router.get("/delete/:id", adminController.delete);
router.get("/manage/customer", adminController.customerManage);
router.get("/manage/history/:id", adminController.customerHistory);
router.get("/manage/photographer", adminController.photographerManage);
router.get("/manage/photographer/add", adminController.photographerAdd);
router.post("/manage/photographer/add", adminController.handlePhotographerAdd);
router.get("/review", adminController.reviewList);

module.exports = router;
