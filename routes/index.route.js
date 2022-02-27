// const { app, express, router, corsOptions, connection } = require("../index");
// console.log(router);
// const users = require("./users.route");

// f.router.use("/users", users);
// const app = require("../index");
// console.log(app);
// const express = require("express");
// const router = express.Router();
// console.log(exp);

const { router, connection } = require("../router");
const users = require("./users.route");
router.use("/users", users);
// router.get("/users", (req, res) =>
//   connection.query("select * from employee", function (error, results, fields) {
//     if (error) throw error;
//     console.log("The response is: ", results);
//     res.send(results);
//   })
// );

router.get("/", (req, res) => res.send("API working"));
router.get("/health", (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  res.send(JSON.stringify(healthcheck));
});

// module.exports = {
//   router,
//   connection,
// };
