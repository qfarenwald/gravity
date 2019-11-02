import React from 'react';
import { Link } from 'react-router-dom';
import './Location.css';

export const Location = () => {
  return (
    <section className="Location">
      <h3>CHOOSE A LOCATION</h3>
      <Link to ="/trails"><button className="Location-btn">DENVER</button></Link>
      <Link to ="/trails"><button className="Location-btn">BOULDER</button></Link>
    </section>
  )
}
