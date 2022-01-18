const http = require("http");
const https = require("https");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const mysql = require("mysql");

// const route = require("./routes/index.route");

const app = express();
const router = express.Router();
const port = 3000;
const corsOptions = { origin: "*" };
const db_config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "dummy_db",
  multipleStatements: true,
};

app.use(router);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const router = require("./routes/index.route");
// console.log(router);

const connection = mysql.createConnection(db_config);
// connection.connect();
connection.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected...");
});

// //to insert record into mysql
// connection.query(
//   'INSERT INTO `employee` (`employee_name`, `employee_salary`, `employee_age`) VALUES ("Adam", 2000 , 30)',
//   function (error, results, fields) {
//     if (error) throw error;
//     console.log("The response is: ", results);
//   }
// );

// //to update record into mysql
// connection.query(
//   'UPDATE `employee` SET `employee_name`="William",`employee_salary`=2500,`employee_age`=32 where `id`=1',
//   function (error, results, fields) {
//     if (error) throw error;
//     console.log("The response is: ", results);
//   }
// );

// //featch records from mysql database
// connection.query("select * from employee", function (error, results, fields) {
//   if (error) throw error;
//   console.log("The response is: ", results);
// });

// app.get("/", cors(corsOptions), (req, res) => {
//   connection.query("select * from employee", function (error, results, fields) {
//     if (error) throw error;
//     console.log("The response is: ", results);
//     res.send(results);
//   });
// });

// "INSERT INTO `employee` (`employee_name`, `employee_salary`, `employee_age`) VALUES (" +
//       data.name +
//       ", " +
//       data.salary +
//       " , " +
//       data.age +
//       ")",

// app.post("/", cors(corsOptions), (req, res) => {
//   const name = req.body.name;
//   const salary = req.body.salary;
//   const age = req.body.age;
//   connection.query(
//     `INSERT INTO 'employee' ('employee_name', 'employee_salary','employee_age') VALUES ("${name}",${salary},${age})`,
//     function (error, results, fields) {
//       if (error) throw error;
//       res.send("Done");
//       //console.log("The response is: ", results);
//     }
//   );
// });

// app.post("/", cors(corsOptions), (req, res) => {
//   const name = req.body.name;
//   const salary = req.body.salary;
//   const age = req.body.age;
//   // connection.query("select * from employee", function (error, results, fields) {
//   //   id = JSON.parse(results).length;
//   // });

//   connection.query(
//     "INSERT INTO employee (employee_name, employee_salary, employee_age) VALUES ('" +
//       name +
//       "','" +
//       salary +
//       "','" +
//       age +
//       "')",
//     function (error, results, fields) {
//       if (error) throw error;
//       console.log("The response is: ", results);
//       res.send(results[1]);
//     }
//   );
// });

// app.get("/:id", cors(corsOptions), (req, res) => {
//   connection.query(
//     "SELECT * FROM employee WHERE id=(id)",
//     function (error, results, fields) {
//       if (error) throw error;
//       console.log("The response is: ", results);
//       res.send(results[1]);
//     }
//   );
// });

// app.put("/:id", cors(corsOptions), (req, res) => {
//   const name = req.body.name;
//   const salary = req.body.salary;
//   const age = req.body.age;

//   connection.query(
//     "UPDATE employee SET employee_name = '" +
//       name +
//       "',employee_salary='" +
//       salary +
//       "',employee_age='" +
//       age +
//       "' WHERE id=(id)",
//     function (error, results, fields) {
//       if (error) throw error;
//       console.log("The response is: ", results);
//       res.send(results[1]);
//     }
//   );
// });

// app.delete(`/:id`, cors(corsOptions), (req, res) => {
//   connection.query(
//     `DELETE FROM EMPLOYEE WHERE ID=(1)`,
//     function (error, results, fields) {
//       if (error) throw error;
//       res.send(results);
//     }
//   );
// });

// app.delete(`/:id`, cors(corsOptions), (req, res) => {
//   connection.query(
//     `DELETE FROM EMPLOYEE WHERE ID=(SELECT MAX(id) FROM EMPLOYEE)`,
//     function (error, results, fields) {
//       if (error) throw error;
//       res.send(results);
//     }
//   );
// });
require("./routes/index.route")(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// //delete record from mysql database
// connection.query(
//   "delete from employee where id=1",
//   function (error, results, fields) {
//     if (error) throw error;
//     console.log("The response is: ", results);
//   }
// );

//end connection
//connection.end();

// module.exports = { app, express, router, corsOptions, connection };

module.exports = {
  app,
  router,
  connection,
  express,
};
