import logo from '../static/images/logo.svg';

import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
       
      </header>
  )
}

export default Header
