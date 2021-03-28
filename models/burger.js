// Sets up my connection to orm
const orm = require("../config/orm.js");
const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
};
