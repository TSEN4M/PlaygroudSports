// src/components/Booking.jsx
import React, { useState } from 'react';
// import '../../styles/Booking.css';
const Booking = () => {
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [sport, setSport] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Location: ${location}\nTime: ${time}\nSport: ${sport}`);
  };

  return (
    <div className="booking-container">
      <h3>Book a Slot</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="text" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="sport">Sport:</label>
          <input type="text" id="sport" value={sport} onChange={(e) => setSport(e.target.value)} />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
