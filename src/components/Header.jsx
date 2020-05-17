import React from 'react';
import '../styles/header.css';

const Header = ({ children }) => (
  <header className="Header">
    <div className="Container Header__container">
      {children}
    </div>
  </header>
);

export default Header;
