const path = require('path');
const places = require('./../database/db_build.js');

exports.get = (req, res, next) => {
  const { place } = req.params;

if (places.includes(place)) {
  return res.render('place', { place });
}
  next();
};
