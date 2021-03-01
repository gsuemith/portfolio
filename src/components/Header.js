import logo from '../static/images/logo.svg';

import React from 'react'

const Header = () => {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <a>Home</a>
          <a>About</a>
          <a>Portfolio</a>
          <a>Contact</a>
        </nav>
       
      </header>
  )
}

export default Header
