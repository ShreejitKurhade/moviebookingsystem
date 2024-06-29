const asyncHandler = require('express-async-handler');
const Movie = require('../models/Movie');

const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find({});
    res.json(movies);
});

module.exports = { getMovies };