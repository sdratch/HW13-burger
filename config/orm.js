var connection = require("../config/connection.js");

const orm = {
  //general orm for getting all data from a table
  selectall: function (table, cb) {
    let queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //orm for inserting 1 new item with only 1 variable to add (defualt is not devoured)
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
  //orm for updating the devoured state 
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
