// const { router, connection } = require("../router");
// console.log(router);
const express = require("express");
const router = express.Router();
const userservice = require("../services/users.service");
router.route("/").get(userservice.getAll);

module.exports = router;

// module.exports = { router, connection };
