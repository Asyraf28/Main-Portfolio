import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import './styles/responsive.css';
import Header from './components/Header';
import Experiences from './components/Experiences';
import About from './components/About';
import Skills from './components/Skills';
import Portfolios from './components/Portfolios';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Experiences />
      <Skills />
      <Portfolios />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
