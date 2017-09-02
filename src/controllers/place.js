const path = require('path');
const places = require('./../database/db_build.js');

exports.get = (request, response, next) => {
  console.log("params ", request.params);
  const { place } = request.params;

if (places.includes(place)) {
  return response.render('place', { place });
}
  next();
};

//This part doesn't work
