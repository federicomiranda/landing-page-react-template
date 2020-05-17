import React from 'react';
import './styles/index.css';
import Header from './components/Header';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import Text from './components/Text';
import ThreeColumns from './components/ThreeColumns';
import Outstanding from './components/Outstanding';
import SixArticles from './components/SixArticles';
import Contact from './components/Contact';
import Form from './components/Form';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header>
      <Logo />
      <Nav />
    </Header>
    <Carousel />
    <Text />
    <ThreeColumns />
    <Outstanding />
    <SixArticles />
    <Contact>
      <Form />
    </Contact>
    <Footer />
  </div>
);

export default App;
