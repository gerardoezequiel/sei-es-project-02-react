import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import RandomPokemon from './components/randomPokemon.js';
import Buttons from './components/Buttons.js';
import List from './components/Pokedex.js';
import Home from '../pages/Home';
import RrandomPokemon from '../pages/RrandomPokemon.js';

class App extends React.Component {
  state = {
    collectedPokemon: [],
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/randomPokemon" component={RrandomPokemon} />
            {/*<Route path="/students" component={ListStudents} />
          <Route path="/pedro" component={Pedro} />
          <Route path="/*" component={ErrorPage} />
  */}
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
