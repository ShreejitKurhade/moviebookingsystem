const express = require('express');
const { bookTicket, getUserBookings } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, bookTicket);
router.route('/mybookings').get(protect, getUserBookings);

module.exports = router;