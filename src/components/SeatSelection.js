import React, { useState } from 'react';
import './SeatSelection.css'; // Assuming you have a CSS file for this component

const SeatSelection = ({ seats, onSelect }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seat) => {
        if (seat.booked) return;
        const newSelectedSeats = selectedSeats.includes(seat.id)
            ? selectedSeats.filter((s) => s !== seat.id)
            : [...selectedSeats, seat.id];
        setSelectedSeats(newSelectedSeats);
        onSelect(newSelectedSeats);
    };

    return (
        <div className="seat-map">
            {seats.map((seat) => (
                <div
                    key={seat.id}
                    className={`seat ${seat.booked ? 'booked' : ''} ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(seat)}
                ></div>
            ))}
        </div>
    );
};

export default SeatSelection;
