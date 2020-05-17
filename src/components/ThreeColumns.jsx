import React from 'react';
import Article from './Article';
import '../styles/threeColumns.css';

const ThreeColumns = () => (
  <section className="ThreeColumns">
    <div className="Container ThreeColumns__container">
      {[1, 2, 3].map((article) => <Article key={article} />)}
    </div>
  </section>
);

export default ThreeColumns;
