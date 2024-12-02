import { Link } from 'react-router-dom';
import './Navbar.scss';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Jabik</div>
      <ul className="navbar__links">
        <li>
          <Link to="/">Галерея</Link>
        </li>
        <li>
          <Link to="/about">О художнике</Link>
        </li>
        <li>
          <Link to="/order">Заказать картину</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
