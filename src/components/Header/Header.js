import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/gravity_logo.svg';

export const Header = () => (
  <header className="Header">
    <Link to="/"><img className="Header-img" src={logo} alt="Gravity logo" /></Link>
    <h2 className="Header-h2">SHUTTLE SERVICE</h2>
  </header>
);
