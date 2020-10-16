import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import RandomPokemon from './components/randomPokemon.js';
import Buttons from './components/Buttons.js';
import Pokedex from './components/Pokedex.js';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage.js';
import RrandomPokemon from '../pages/RrandomPokemon.js';

class App extends React.Component {
  state = {
    collectedPokemon: [],
  };

  render() {
    return (
      <>
      <div>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/randomPokemon" component={RrandomPokemon} />
            <Route
              path="/pokedex"
              component={Pokedex}
              col={this.state.collectedPokemon}
            />
            {/* <Route path="/pedro" component={Pedro} /> */}
            <Route path="/*" component={ErrorPage} />
          </Switch>
      
        </BrowserRouter>
        </div>
          <Footer/>
</>
    );
  }
}

export default App;
