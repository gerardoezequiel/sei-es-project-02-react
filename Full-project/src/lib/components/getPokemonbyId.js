import React from "react";

// URL of the API
const url = "https://pokeapi.co/api/v2/pokemon-form/";

class GetPokemonById extends React.Component {
  state = {
    name: "",
    img: "",
    id: 15,
  };

  async componentDidMount() {
    // Create new link for the API resources of a random pokemon
    const newUrl = `${url}${this.state.id}/`;

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
        <h1>{this.state.name}</h1>
        <img src={this.state.img} />
      </div>
    );
  }
}
export default GetPokemonById;
