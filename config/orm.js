// Set up my connection
const connection = require("./connection.js");

const orm = {
  selectAll: function (tableInput, cb) {
    const query = "SELECT * FROM " + tableInput + ";";
    connection.query(query, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// Exporting the orm object
module.exports = orm;
