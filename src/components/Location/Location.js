import React from 'react';
import { Link } from 'react-router-dom';
import './Location.css';

export const Location = (props) => {
  return (
    <section className="Location">
      <h3>CHOOSE A LOCATION</h3>
      <Link to ="/trails" onClick={() => props.getLatLon(39.7392, 104.9903)}><button className="Location-btn">DENVER</button></Link>
      <Link to ="/trails" onClick={() => props.getLatLon(40.0150, 105.2705)}><button className="Location-btn">BOULDER</button></Link>
    </section>
  )
}
