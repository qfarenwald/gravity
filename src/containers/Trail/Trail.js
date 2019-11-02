import React from 'react';
import { Link } from 'react-router-dom';
import './Trail.css';

export const Trail = ({ name, stars, descent }) => {
  return (
    <section className="Trail">
      <p className="Trail-p stars">{stars} Stars</p>
      <p className="Trail-p name">{name}</p>
      <p className="Trail-p descent">{descent}ft Descent</p>
      <Link to="/shuttle"><button className="Trail-btn">BOOK</button></Link>
    </section>
  )
}
