import React from 'react';
import RandomPokemon from '../lib/components/randomPokemon';
const RrandomPokemon = (props) => {
  return (
    <main className="page rrandompokemon">
      <RandomPokemon col={props.col} />
      <main className="page home">
        <div className="campo">
          <img className="campito" />
          <div className="pokedex">
            <img className="pokedex2" />
            <div className="arbusto">
              <img className="arbusto2" />
              <div className="bola">
                <img className="bola2" />
              </div>
            </div>
          </div>
        </div>
      </main>
      ); };
    </main>
  );
};
export default RrandomPokemon;
