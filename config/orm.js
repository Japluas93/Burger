// Set up my connection
const connection = require("./connection.js");

// Helper function to loop through and create array of question marks and turn it into a string
function printQuestionMarks(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

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
