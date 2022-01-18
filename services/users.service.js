const c = require("../index");
console.log(c);
const getAll = function (req, res) {
  c.connection.query(
    "select * from employee",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The response is: ", results);
      res.send(results);
    }
  );
};

module.exports = {
  getAll,
};
