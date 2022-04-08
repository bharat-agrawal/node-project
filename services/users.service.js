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
  const name = req.body.employee_name;
  const salary = req.body.employee_salary;
  const age = req.body.employee_age;
  const code = req.body.employee_code;
  const department = req.body.employee_department;
  const designation = req.body.employee_designation;
  connection.query(
    `UPDATE employee SET employee_name='${name}',employee_salary=${salary},employee_age=${age},employee_code='${code}',employee_department='${department}',employee_designation='${designation}' where id=${req.params.id}`,
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
  const name = req.body.employee_name;
  const salary = req.body.employee_salary;
  const age = req.body.employee_age;
  const code = req.body.employee_code;
  const department = req.body.employee_department;
  const designation = req.body.employee_designation;
  connection.query(
    `INSERT INTO employee (employee_name, employee_salary, employee_age, employee_code, employee_department, employee_designation) VALUES ('${name}',${salary},${age},'${code}','${department}','${designation}')`,
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
