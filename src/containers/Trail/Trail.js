import React from 'react';
import './Trail.css';

export const Trail = ({ name, stars }) => {
  return (
    <section className="Trail">
      <p className="Trail-p stars">{stars} Stars</p>
      <p className="Trail-p name">{name}</p>
      <button className="Trail-btn">BOOK</button>
    </section>
  )
}
