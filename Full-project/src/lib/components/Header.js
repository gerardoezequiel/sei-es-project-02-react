import React from 'react';
const Header = () => {
  return (
    <div>
      <ul id="nav">
        <li>
          <a href="./contact">Contact</a>
        </li>
        <li>
          <a href="./pokedex">Pokédex</a>
        </li>
        <li>
          <a href="./search">Search</a>
        </li>
        <li>
          <a href="./randomPokemon">Gotta catch them all!</a>
        </li>
        <li className="logo-container">
          <a href="/" className="logo-container">
            <img className="pika-sprite" />
            Home
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
