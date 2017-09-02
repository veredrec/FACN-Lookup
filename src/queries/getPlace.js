const dbConnection = require('../database/db_connection');
const querystring = require('querystring');

const getPlace = (callback) => {
console.log("we are in getPlace function in file");
  const oneOption = `SELECT name, category, address, email, phone, image
    FROM volunteer;`;
  dbConnection.query(oneOption, (err, res) => {
    if (err) {
      console.log("err in getPlace ", err);
      return callback(err);
    } else {
      console.log("Success!");
      callback(null, res.rows);
    }
  })
}

module.exports = getPlace;
