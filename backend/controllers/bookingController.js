const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');
const Movie = require('../models/Movie');

const bookTicket = asyncHandler(async (req, res) => {
    const { movieId, seats, showtime, price } = req.body;
    
    const booking = new Booking({
        user: req.user._id,
        movie: movieId,
        seats,
        showtime,
        price
    });

    const createdBooking = await booking.save();

    res.status(201).json(createdBooking);
});

const getUserBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate('movie');
  res.json(bookings);
});

module.exports = { bookTicket, getUserBookings };