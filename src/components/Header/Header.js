import React from 'react';
import './Header.css';
import logo from '../../images/gravity_logo.svg'

export const Header = () => {
  return (
    <header className="Header">
      <img className="Header-img" src={logo} alt="Gravity logo" />
      <h2 className="Header-h2">SHUTTLE SERVICE</h2>
    </header>
  )
}
