import React from 'react';
import GetPokemonById from './getPokemonbyId.js';

class Pokedex extends React.Component {
  state = {
    pokedexItemsPerPage: 20,
    indices: [],
  };

  async componentDidMount() {
    const indices = [];
    const initialPokemon = 400;
    for (
      let i = initialPokemon;
      i < this.state.pokedexItemsPerPage + initialPokemon;
      i++
    ) {
      indices.push(i);
    }

    this.setState({ indices });

    console.log(indices);
  }
  render() {
    return (
      <div>
        {this.state.indices.map((i) => {
          return <GetPokemonById id={i} />;
        })}
      </div>
    );
  }
}

export default Pokedex;
