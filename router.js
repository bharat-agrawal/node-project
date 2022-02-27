const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const db_config = {
  host: process.env.HOST,
  user: "root",
  password: "",
  database: "dummy_db",
  multipleStatements: true,
};
const connection = mysql.createConnection(db_config);
// connection.connect();
connection.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected...");
});

module.exports = {
  router,
  connection,
};
