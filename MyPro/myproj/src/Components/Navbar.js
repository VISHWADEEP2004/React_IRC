// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../Assert/Css/nav.css';
import dog from '../Assert/img/dog.gif';

function Navbar({ isDashboardVisible, toggleDashboard }) {
  return (
    <div className="bb">
      <nav className="navbar">
        <p className="logo">
          petfinder !{' '}
          <span onClick={toggleDashboard}>
            {isDashboardVisible ? (
              <Link to="/">
                <i className="fa-solid fa-table-columns"></i>
              </Link>
            ) : (
              <Link to="/dashboard">
                <i className="fa-solid fa-table-columns"></i>
              </Link>
            )}
          </span>
        </p>
        <ul clasName='un-li'>
          <li>
            <Link to="/register" className="nav-link">
              REGISTER
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
