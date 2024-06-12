import React from "react";
import {Link} from "react-router-dom";  
const Header = () =>{
    return (
        <div>
            <h1>The Playground Sports</h1>
            <ul className="header">
            <li><Link to="/">About Us</Link></li>
            <li ><Link to="/upevents">Upcoming Events</Link></li>
            <li><Link to="/booking">Play With Us</Link></li>
            <li><Link to="/community">Sports Community</Link></li>
            </ul>
        </div>
    )
}
export default  Header;