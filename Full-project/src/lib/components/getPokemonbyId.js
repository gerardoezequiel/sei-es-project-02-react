import React from 'react';

// URL of the API
const url = 'https://pokeapi.co/api/v2/pokemon-form/';

class GetPokemonById extends React.Component {
  state = {
    name: '',
    img: '',
  };

  async componentDidMount() {
    // Create new link for the API resources of a random pokemon
    const newUrl = `${url}${this.props.id}/`;

    // Get resources
    const res = await fetch(newUrl);
    const pokemonInfo = await res.json();

    // Create new variables. Their value is taken from the API resource (pokemonInfo)
    const name = pokemonInfo.name;
    const img = pokemonInfo.sprites.front_default;

    // Change the state of the component, updating the component properties
    this.setState({ name, img });
    // console.log(this.state.id);
    // console.log(pokemonInfo);
  }
  render() {
    return (
      <div className="wildPokemon">
        <img src={this.state.img} />
        <h5>{this.state.name}</h5>
      </div>
    );
  }
}
export default GetPokemonById;
