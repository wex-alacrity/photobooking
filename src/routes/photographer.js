var express = require("express");
const photographerController = require("../http/controllers/photographer.controller");

var router = express.Router();

/* GET users listing. */
router.get("/", photographerController.index);
module.exports = router;
