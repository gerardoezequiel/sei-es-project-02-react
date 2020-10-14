import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import RandomPokemon from './randomPokemon.js';

function App() {
  return (
    <div>
      <Header />

      <h1>Primeros pasos</h1>
      <RandomPokemon />
      <Footer />
    </div>
  );
}

export default App;
