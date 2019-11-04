import React from 'react';
import { Link } from 'react-router-dom';
import './Trail.css';

export const Trail = ({ name, stars, descent }) =>

// const dropdown = () => {
//   var trail = document.getElementById('trail');
//   trail.insertAdjacentHTML('afterend',
//   `<section className="Trail-dropdown">
//     <p className="dropdown">${stars} Stars</p>
//   </section>`);
// }

  (
    <section className="Trail" id="trail">
      <p className="Trail-p stars">
        {stars}
        {' '}
Stars
      </p>
      <p className="Trail-p name">{name}</p>
      <p className="Trail-p descent">
        {descent}
        {' '}
ft Descent
      </p>
      <Link to="/shuttle"><button className="Trail-btn">BOOK</button></Link>
    </section>
  );


// <p className="Trail-p info" onClick={dropdown}>MORE INFO</p>
