import React from 'react';
import RandomPokemon from '../lib/components/randomPokemon';

const RrandomPokemon = (props) => {
  return (
    <main className="page rrandompokemon">
      <RandomPokemon col={props.col} />
    </main>
  );
};

export default RrandomPokemon;
