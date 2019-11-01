import React from 'react';
import './Trail.css';

export const Trail = ({ name, stars }) => {
  return (
    <section className="Trail">
      <p className="Trail-p">{stars} Stars</p>
      <p className="Trail-p">{name}</p>
    </section>
  )
}
