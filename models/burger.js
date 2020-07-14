const orm = require("../config/orm.js");

const burger = {
  all: function (cb) {
    orm.selectall("burgers", (res) => {
      cb(res);
    });
  },
  insert: function (name, cb) {
    orm.insertOne("burgers", "burger_name", name, (res) => {
      cb(res);
    });
  },
  update: function (devoured, id, cb) {
    console.log("models updating " + devoured)
    orm.updateOne("burgers", "devoured", devoured, id, (res) => {
      cb(res);
    });
  },
};
// Export the database functions for the controller (catsBurger.js).
module.exports = burger;
