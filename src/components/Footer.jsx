import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/footer.css';

const Footer = () => (
  <footer className="Footer">
    <div className="Container Footer__container">
      <div className="Footer__info">
        <p className="Footer__text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt. Consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </p>

        <ul className="Footer__icons">
          <li className="Footer__icon">
            <a href="/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li className="Footer__icon">
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="Footer__icon">
            <a href="/">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li className="Footer__icon">
            <a href="/">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </li>
          <li className="Footer__icon">
            <a href="/">
              <FontAwesomeIcon icon={faMapMarker} />
            </a>
          </li>
          <li className="Footer__icon">
            <a href="/">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>

      <nav className="Footer__nav">
        <ul>
          <li className="Footer__item">
            <a href="/">Sección 1</a>
          </li>
          <li className="Footer__item">
            <a href="/">Sección 2</a>
          </li>
          <li className="Footer__item">
            <a href="/">Sección 3</a>
          </li>
          <li className="Footer__item">
            <a href="/">Sección 4</a>
          </li>
          <li className="Footer__item">
            <a href="/">Sección 5</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
