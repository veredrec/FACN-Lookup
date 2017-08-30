const express = require('express');
const path = require('path');
const getOptions = require('./../queries/getOptions.js');
const router = express.Router();

const home = require('./home');
// const places = require('./../queries/getOptions');
// const place = require('./../queries/getPlace');
const error = require('./error');

router.get('/', (request, response) => {
  console.log("stating getOptions from router");
  getOptions((err, places) => {
    if (err) {
      console.log("err", err);
      response.send('<h1>Sorry, there is a problem with our data</h1>');
    } else {
      console.log("takes data from db in home");
      return response.render('home', { places });
    }
  })
});

// router.get('/places/:place', places.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
