const connection = require("../db");
const getAll = function (req, res) {
  connection.query("select * from employee", function (error, results, fields) {
    if (error) throw error;
    console.log("The response is: ", results);
    res.send(results);
  });
};

const getOne = function (req, res) {
  connection.query(
    `select * from employee WHERE id=${req.params.id}`,
    function (error, results, fields) {
      if (error) throw error;
      console.log("The response is: ", results);
      res.send(results);
    }
  );
};

const updateOne = function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const salary = req.body.salary;
  const age = req.body.age;
  const code = req.body.code;
  const department = req.body.department;
  const designation = req.body.designation;
  connection.query(
    `UPDATE employee SET name='${name}',email='${email}',salary=${salary},age=${age},code='${code}',department='${department}',designation='${designation}' where id=${req.params.id}`,
    function (error, results, fields) {
      if (error) throw error;
      console.log("The response is: ", results);
      res.send(results);
    }
  );
};

const deleteOne = function (req, res) {
  connection.query(
    `DELETE from employee where id=${req.params.id}`,
    function (error, results, fields) {
      if (error) throw error;
      console.log("The response is: ", results);
      res.send(results);
    }
  );
};

const createOne = function (req, res) {
  const name = req.body.name;
  const salary = req.body.salary;
  const age = req.body.age;
  const code = req.body.code;
  const department = req.body.department;
  const designation = req.body.designation;
  connection.query(
    `INSERT INTO employee (name, salary, age, code, department, designation) VALUES ('${name}',${salary},${age},'${code}','${department}','${designation}')`,
    function (error, results, fields) {
      if (error) throw error;
      console.log("The response is: ", results);
      res.send(results);
    }
  );
};

module.exports = {
  getAll,
  getOne,
  updateOne,
  deleteOne,
  createOne,
};
