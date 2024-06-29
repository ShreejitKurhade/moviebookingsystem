import React from 'react';
import './BookingConfirmation.css'; // Assuming you have a CSS file for this component

const BookingConfirmation = ({ booking }) => {
    return (
        <div className="container">
            <h2>Booking Confirmation</h2>
            <div className="confirmation-details">
                <p><strong>Movie:</strong> {booking.movie.title}</p>
                <p><strong>Seats:</strong> {booking.seats.join(', ')}</p>
                <p><strong>Showtime:</strong> {booking.showtime}</p>
                <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
            </div>
        </div>
    );
};

export default BookingConfirmation;
