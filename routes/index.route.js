const express = require('express')
const router = express.Router()

const users = require("./users.route");

router.use("/users",users)

router.get("/", (req, res) => res.send("API working"));
router.get("/health", (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;

// module.exports = (app) => {
//   app.get("/", (req, res) => res.send("API working"));
//   app.get("/health", (req, res) => {
//     const healthcheck = {
//       uptime: process.uptime(),
//       message: "OK",
//       timestamp: Date.now(),
//     };
//     res.send(JSON.stringify(healthcheck));
//   });
//   app.use("/users",users)
// };
