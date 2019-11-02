import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.css';

export const Modal = () => {
  return (
    <section className="Modal">
      <h3>YOUR SHUTTLE IS BOOKED</h3>
      <h3>A CONFIRMATION EMAIL HAS BEEN SENT</h3>
      <h3>GET READY TO DROP IN!</h3>
      <Link to='/trails' className="link"><h5>BACK TO TRAILS</h5></Link>
    </section>
  )
}
