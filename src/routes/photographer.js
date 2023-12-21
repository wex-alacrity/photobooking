var express = require("express");
const photographerController = require("../http/controllers/photographer.controller");

var router = express.Router();

/* GET users listing. */
router.get("/", photographerController.index);
router.get("/booking-list", photographerController.bookingList);
router.get("/review", photographerController.review);
router.get("/select/:id", photographerController.selectBooking);
router.post("/select/:id", photographerController.handleSelect);
module.exports = router;
