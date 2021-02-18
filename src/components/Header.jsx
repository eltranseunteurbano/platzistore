import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <nav className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        <div className="Header-alert">{cart.length > 0 ? cart.length : 0}</div>
      </nav>
    </header>
  );
};

export default Header;
