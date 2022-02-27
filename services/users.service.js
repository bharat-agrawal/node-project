// const c = require("../index");
const { router, connection } = require("../router");
// console.log(c);
// console.log(c);
const getAll = function (req, res) {
  connection.query("select * from employee", function (error, results, fields) {
    if (error) throw error;
    console.log("The response is: ", results);
    res.send(results);
  });
};

module.exports = {
  getAll,
};
