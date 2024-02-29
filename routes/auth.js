const express = require("express");
const router = express.Router();
const {
  getPage
} = require("../controllers/auth");

router.route("/getall").get(getPage);
module.exports = router;
