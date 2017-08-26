const places = require('./../database/db_build.js');

exports.get = (req, res) => {
  res.render('places', { places });
};
