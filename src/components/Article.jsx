import React from 'react';
import '../styles/article.css';

const Article = () => (
  <article className="Article">
    <img src="https://placehold.it/130x130" alt="" className="Article__img" />
    <h2 className="Article__title">Lorem ipsum</h2>
    <p className="Article__text">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt. Consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor.
    </p>
  </article>
);

export default Article;
