const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home');
const places = require('./places');
const place = require('./place');
const error = require('./error');

router.get('/', home);
router.get('/place', places.get);
router.get('/places/:place', place.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
