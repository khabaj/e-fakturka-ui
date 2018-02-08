import React from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const TopNavbar = () => (
  <Navbar fixed="top" dark expand="xs" color="dark">
    <NavbarBrand href="/">e-fakturka</NavbarBrand>
    <Collapse navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/register" className="nav-link">Zarejestruj się</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login" className="nav-link">Zaloguj się</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

export default TopNavbar;