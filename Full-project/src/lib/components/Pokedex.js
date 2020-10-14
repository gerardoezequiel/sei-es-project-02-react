import React from "react";
import GetPokemonById from "./getPokemonbyId.js";

class List extends React.Component {
  state = {
    indices: [],
  };

  async componentDidMount() {
    const indices = [];
    for (let i = 0; i < 150; i++) {
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

export default List;
