import React from 'react';
import Article from './Article';
import '../styles/sixArticles.css';

const SixArticles = () => (
  <section className="SixArticles">
    <div className="Container SixArticles__container">
      {[1, 2, 3, 4, 5, 6].map((article) => (
        <Article class="Article" key={article} />
      ))}
    </div>
  </section>
);

export default SixArticles;
