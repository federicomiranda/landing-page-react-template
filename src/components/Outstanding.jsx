import React from 'react';
import '../styles/outstanding.css';

const Outstanding = () => (
  <section className="Outstanding">
    <div className="Container Outstanding__container">
      <div className="Outstanding__column">
        <h2 className="Outstanding__title">
          At vero eos et accusam et justo duo dolores et ea rebum.
        </h2>
      </div>
      <div className="Outstanding__column">
        <p className="Outstanding__text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
          <strong>
            At vero eos et accusam et justo duo dolores et ea rebum
          </strong>
          . Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet.
        </p>
        <p className="Outstanding__text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
        </p>

        <a href="/" className="Outstanding__btn">
          CTA
        </a>
      </div>
    </div>
  </section>
);

export default Outstanding;
