const mysql = require("mysql");
const db_config = {
  host: "sql6.freemysqlhosting.net",
  user: "sql6484491",
  password: "wfvD5udXDM",
  database: "sql6484491",
  multipleStatements: true,
};
const connection = mysql.createConnection(db_config);
connection.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected...");
});

module.exports = connection;
