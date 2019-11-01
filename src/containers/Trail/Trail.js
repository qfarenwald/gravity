import React from 'react';
import './Trail.css';

export const Trail = ({ name, stars }) => {
  return (
    <section className="Trail">
      <p>{name}</p>
      <p>{stars}</p>
    </section>
  )
}
