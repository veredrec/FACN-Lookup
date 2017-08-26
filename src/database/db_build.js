const fs = require('fs');
const dbconnection = require('./db_connection');

const buildScript = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

dbconnection.query(buildScript, (err, res) => {
  if (err) {
    console.log("Error with database ", err);
  } else {
    console.log('Volunteer table succesfully created');
  }
})
