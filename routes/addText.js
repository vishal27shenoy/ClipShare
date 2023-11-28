const express = require("express");
const controller = require('../controller/controller.js')
const router = express.Router();
router.route("/").post(controller.addText).get(controller.getText);
module.exports = router;
