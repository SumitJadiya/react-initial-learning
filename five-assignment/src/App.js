import React, { useState } from 'react';
import MainContext from './context/MainContext';
import HeroSections from './components/HeroSections';
import Header from './components/header';

const App = () => {
  const themeHook = useState("light")
  return (
    <MainContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSections />
      </div>
    </MainContext.Provider>
  )
}

export default App;