const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Movie'
    },
    seats: {
        type: [String],
        required: true
    },
    showtime: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;