import logo from '../images/logo.png';

import React from 'react'
export default function header(props) {
  return (
    <header>
      <div className="main-header">
        <div className="container">
          <div className="row">
          
          { props.logo? <div className="logo">
          <img src={logo} alt=""/>
        </div>: "this is blank" }
        <div className="navbar">
          <nav>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Book Now</a></li>
          </ul>
          </nav>
        </div>
        </div>
        </div>
      </div>
      
    </header>
      )
}
