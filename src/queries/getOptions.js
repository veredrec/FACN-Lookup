const dbConnection = require('../database/db_connection');
const querystring = require('querystring');

const getOptions = (callback) => {
console.log("we are in getOptions function in file");
  const allOptions = `SELECT name, category,image
    FROM volunteer;`;
  dbConnection.query(allOptions, (err, res) => {
    if (err) {
      console.log("err in getOptions ", err);
      return callback(err);
    } else {
      console.log(res.rows);
      callback(null, res.rows);
    }
  })
}

module.exports = getOptions;
