import React from 'react';
import RandomPokemon from '../lib/components/randomPokemon';
import getPokemonbyId from '../lib/components/getPokemonbyId';
const RrandomPokemon = (props) => {
  return (
    <main className="page rrandompokemon">
      <RandomPokemon col={props.col} />
      <div className="page home">
        <div className="campo">
          <img className="campito" />
          <div className="pokedex">
            <img className="pokedex2" />
            <div className="arbusto">
              <div className="bola">
                <img className="bola2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <getPokemonbyId/>
    </main>
  );
};
export default RrandomPokemon;
