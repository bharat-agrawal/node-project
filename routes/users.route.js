const express = require("express");
const router = express.Router();
const userservice = require("../services/users.service");
router.route("/").get(userservice.getAll);

module.exports = router;
