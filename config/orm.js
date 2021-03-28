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
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
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
  insertOne: function (tableInput, colName, vals, cb) {
    let queryString = "INSERT INTO " + tableInput;
    queryString += " (";
    queryString += colName.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, function (err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
};

// Exporting the orm object
module.exports = orm;
