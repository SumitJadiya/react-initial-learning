import React from 'react';
import Header from './components/header';
import Hero from './sections/Hero';
import Main from './components/main';
import 'react-typed/dist/animatedCursor.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
    </>
  );
}

export default App;
