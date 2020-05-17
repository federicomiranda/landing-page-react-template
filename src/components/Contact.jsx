import React from 'react';
import '../styles/contact.css';

const Contact = ({ children }) => (
  <section className="Contact">
    <div className="Container Contact__container">
      <h2 className="Contact__title">Lorem ipsum</h2>
      <p className="Contact__text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt.
      </p>

      {children}
    </div>
  </section>
);

export default Contact;
