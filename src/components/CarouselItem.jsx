import React from 'react';

const CarouselItem = () => (
  <li className="Item">
    <div className="Container Item__container">
      <article className="Item__article">
        <h2 className="Item__title">Lorem ipsum dolor sit</h2>
        <p className="Item__text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>

        <a href="/" className="Item__btn">
          CTA
        </a>
      </article>

      <img src="https://placehold.it/300x300" alt="" className="Item__img" />
    </div>
  </li>
);

export default CarouselItem;
