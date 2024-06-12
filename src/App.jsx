import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import UpcomingEvents from './components/UpcomingEvents.jsx';
import Booking from './components/Booking.jsx';
import Community from './components/Community.jsx';
import AboutUs from './components/AboutUs.jsx';
import './App.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element ={<AboutUs />}></Route>
          <Route path="/upevents" element={<UpcomingEvents />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

