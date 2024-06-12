// src/LandingPage.js
import React from 'react';
import AboutUs from './AboutUs.jsx';
import UpcomingEvents from './UpcomingEvents.jsx';
import Community from './Community.jsx'
import Booking from './Booking.jsx';
const LandingPage = () => {
  return (
    <div className="landing-page">
      
        <h1 className='mainhead'>The Playground Sports</h1>


      <section className="features">
        <UpcomingEvents />
      </section>
       
       <Community />
        <Booking/>
       <AboutUs />
    </div>
  );
};

export default LandingPage;
