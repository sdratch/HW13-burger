var connection = require("../config/connection.js");

const orm = {
  selectall: function (table, cb) {
    let queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (table, col, name, cb) {
    let queryString = `INSERT INTO  ${table}(${col})
    VALUES (?);`;

    connection.query(queryString, [name], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (table, col, val, loc,cb) {
    let queryString = `UPDATE  ${table}
   SET  ${col} = ${val}
    WHERE id = ?;`;
    connection.query(queryString, [loc], (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};
// Export the orm object for the model (burger.js).
module.exports = orm;
