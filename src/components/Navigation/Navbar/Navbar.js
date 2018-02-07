import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand fixed-top navbar-light border-bottom bg-light">
    <a className="navbar-brand mb-0 h1" href="/">e-fakturka</a>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Rejestracja
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Logowanie
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;