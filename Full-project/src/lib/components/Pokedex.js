import React from 'react';
import GetPokemonById from './getPokemonbyId.js';

class Pokedex extends React.Component {
  state = {
    pokedexItemsPerPage: 151,
    indices: [],
  };

  async componentDidMount() {
    const indices = [];
    const initialPokemon = 1;
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
      <div className="pokeFlex">
        {this.state.indices.map((i) => {
          return <GetPokemonById id={i} />;
        })}
      </div>
    );
  }
}

export default Pokedex;
