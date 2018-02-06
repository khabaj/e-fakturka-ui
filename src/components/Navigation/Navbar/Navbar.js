import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand fixed-top navbar-light border-bottom bg-light">
    <a className="navbar-brand mb-0 h1" href="/">e-fakturka</a>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Rejestracja</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Logowanie</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;