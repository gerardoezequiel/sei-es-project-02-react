import React from 'react';
import Buttons from './Buttons';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import GetPokemonById from './getPokemonbyId.js';

// URL of the API
const url = 'https://pokeapi.co/api/v2/pokemon-form/';

class RandomPokemon extends React.Component {
  state = {
    name: '',
    img: '',
    id: 0,
    collection: [],
  };

  async pokemonToPokedex() {
    this.state.collection.push(this.state.id);
    console.log(this.state.collection);
    this.getNewPokemon();
  }

  // actualizeCollection() {
  //   const pokemonToPokedex = this.getNewPokemon + this.actualizeCollection;
  // }

  /////const StudentItem = ({ studentData }) => {
  ///////const { _id, name, location, githubUsername } = studentData;

  // async pokemonToPokedex() {}

  async getNewPokemon() {
    // Generate random number [1-150]
    const id = Math.ceil(Math.random() * 802);
    // Create new link for the API resources of a random pokemon
    const newUrl = `${url}${id}/`;

    // Get resources
    const res = await fetch(newUrl);
    const pokemonInfo = await res.json();

    // Create new variables. Their value is taken from the API resource (pokemonInfo)
    const name = pokemonInfo.name;
    const img = pokemonInfo.sprites.front_default;

    // Change the state of the component, updating the component properties
    this.setState({ name, img, id });
    // console.log(this.state.id);
    // console.log(pokemonInfo);
  }

  async componentDidMount() {
    this.getNewPokemon();
  }

  render() {
    return (
      <div> 
      <div className="randomPokemonBox">
        <div className="wildPokemon">
          <h5>{this.state.name}</h5>
          <img src={this.state.img} />
        </div>
        <button onClick={() => this.pokemonToPokedex()}>Catch</button>
        <button onClick={() => this.getNewPokemon()}>Escape</button>
        <div className="collectionBox">
          {this.state.collection.map((i) => {
            return <GetPokemonById id={i} key={i} />;
          })}
        </div>
        </div>
        </div>
    );
  }
}
export default RandomPokemon;
