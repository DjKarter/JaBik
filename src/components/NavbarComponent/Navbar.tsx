import { Link } from 'react-router-dom';
import './Navbar.scss';
import React from 'react';
import { ABOUT, GALLERY, JABIK, ORDER } from '../../shared/lib/consts.ts';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">{JABIK}</div>
      <ul className="navbar__links">
        <li>
          <Link to="/">{GALLERY}</Link>
        </li>
        <li>
          <Link to="/about">{ABOUT}</Link>
        </li>
        <li>
          <Link to="/order">{ORDER}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
