import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links left">
        <li><a href="#about">About</a></li>
        <li><a href="#recipes">Recipes</a></li>
        <li><a href="#recipes">Stories</a></li>

      </ul>

      <div className="logo">
        <img src='./images/logo.png' alt="Logo" />
      </div>

      <ul className="nav-links right">
        <li><a href="#shop">Shop</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact">Flavour</a></li>

      </ul>
    </nav>
  )
}

export default Navbar
