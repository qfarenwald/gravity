import React from 'react';
import { Link } from 'react-router-dom';
import './Location.css';

export const Location = () => {
  return (
    <section className="Location">
      <h4 className="Location-h4">CHOOSE LOCATION</h4>
      <Link to ="/trails"><button className="Location-btn">DENVER</button></Link>
      <Link to ="/trails"><button className="Location-btn">BOULDER</button></Link>
    </section>
  )
}
