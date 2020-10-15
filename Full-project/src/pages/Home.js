import React from 'react';
 

const Home = () => {
  return (
    <main className="page home">
    <div className="pokeball"></div>
    <div className="logo"><img className="foto"/></div>
    <div className="franja"></div>
    <div className="boton"></div>
    <div className="botoncito"></div>
    <div className="oak"></div>
    <div className="sombraOak"></div>

    <div className="texto">
      ¡Bienvenidos al mundo Pokémon! Soy Oak, pero la gente me llama Profesor
      Pokémon. Este es un trabajo grupal efectuado por Alejandro, Jose Aurelio,
      Gerardo y Yerell Se trata de un trabajo en React para el curso de
      Estudiantes Inmersivos de Genearl Assembly en el cual han desarrollado una
      Pokédex y un campo de captura para ayudarme en mi investigación PKMN. Si
      quereis contribuir al estudio de los PKMN solo teneis que pulsar "Hunt your Pokémon!" en el centro de la pantalla . ¡Tu aventura PKMN está
      a punto de comenzar!
   </div>
    </main>
  );
};

export default Home;
