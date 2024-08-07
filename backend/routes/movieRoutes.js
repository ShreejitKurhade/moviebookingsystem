const express = require('express');
const { getMovies } = require('../controllers/movieController');
const router = express.Router();

router.route('/').get(getMovies);

module.exports = router;