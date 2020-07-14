const orm = require("../config/orm.js");
//call to get all the burgers
const burger = {
  all: function (cb) {
    orm.selectall("burgers", (res) => {
      cb(res);
    });
  },
  //call to add a burger
  insert: function (name, cb) {
    orm.insertOne("burgers", "burger_name", name, (res) => {
      cb(res);
    });
  },
  //call to update burger to devour sending in the new state and id
  update: function (devoured, id, cb) {
    orm.updateOne("burgers", "devoured", devoured, id, (res) => {
      cb(res);
    });
  },
};
// Export the database functions for the controller (catsBurger.js).
module.exports = burger;
