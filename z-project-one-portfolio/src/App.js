import React from 'react';
import Header from './components/header';
import Hero from './sections/Hero';
import Main from './components/main';
import 'react-typed/dist/animatedCursor.css'
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default App;
