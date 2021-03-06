// Sets up my connection to orm
const orm = require("../config/orm.js");
const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (colName, vals, cb) {
    orm.insertOne("burgers", colName, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};
// Exporting the burger object
module.exports = burger;
