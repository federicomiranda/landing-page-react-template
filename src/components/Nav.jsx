import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/nav.css';

const Nav = () => (
  <nav className="Nav">
    <ul className="Nav__list">
      <li className="Nav__item">
        <a href="/" className="Nav__item-btn">Sección 1</a>
      </li>
      <li className="Nav__item">
        <a href="/" className="Nav__item-btn">Sección 2</a>
      </li>
      <li className="Nav__item">
        <a href="/" className="Nav__item-btn">Sección 3</a>
      </li>
      <li className="Nav__item">
        <a href="/" className="Nav__item-btn">Sección 4</a>
      </li>
      <li className="Nav__item">
        <a href="/" className="Nav__item-btn">Sección 5</a>
      </li>
    </ul>

    <ul className="Nav__list Nav__list-social">
      <li className="Nav__item">
        <a href="/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li className="Nav__item">
        <a href="/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
