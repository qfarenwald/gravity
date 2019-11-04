import React from 'react';
import { Link } from 'react-router-dom';
import './Trail.css';

export const Trail = ({ name, stars, descent }) => (
    <section className="Trail" id="trail">
      <p className="Trail-p stars">{stars} Stars</p>
      <p className="Trail-p name">{name}</p>
      <p className="Trail-p descent">{descent} ft Descent</p>
      <Link to={`/shuttle/${name}`}><button className="Trail-btn" id={name}>BOOK</button></Link>
    </section>
  );
