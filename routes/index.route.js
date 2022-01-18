// const { app, express, router, corsOptions, connection } = require("../index");
// console.log(router);
// const users = require("./users.route");

// f.router.use("/users", users);
const exp = require("../index");
console.log(exp);

router.get("/", (req, res) => res.send("API working"));
router.get("/health", (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = {};
