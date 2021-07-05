import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg">
              <ul className="navbar-nav">
              <li className="nav-item">
                      <a className="nav-link title" href="#">Easy Flashcards</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Packages</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Contact Us</a>
                  </li>
              </ul>
          </nav>
      </div>
     
    )
    
}

export default Navbar