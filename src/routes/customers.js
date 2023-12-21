var express = require("express");
const customerController = require("../http/controllers/customer.controller");
var router = express.Router();

/* GET users listing. */
router.get("/", customerController.index);
router.get("/create", customerController.create);
router.post("/create", customerController.handleCreate);
router.get("/edit/:id", customerController.edit);
router.post("/edit/:id", customerController.handleEdit);
router.get("/detail/:id", customerController.detail);
router.get("/delete/:id", customerController.delete);
router.get("/review/:id", customerController.review);
router.post("/review/:id", customerController.handleReview);
router.get("/review", customerController.reviewList);
module.exports = router;
