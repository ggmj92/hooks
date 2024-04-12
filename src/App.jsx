import React, { useState } from 'react';
import useFetch from './hooks/useFetchCharacters';
import './App.css';

function App() {
  const [pokemonId, setPokemonId] = useState(1);
  const [rickId, setRickId] = useState(1);

  const { data: pokemon, loading: pokemonLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const { data: character, loading: characterLoading } = useFetch(`https://rickandmortyapi.com/api/character/${rickId}`);

  if (pokemonLoading || characterLoading) return <><h2>Loading...</h2></>

  const randomizePokemonCharacter = () => {
    setPokemonId(Math.floor(Math.random() * 152) + 1);
  };

  const randomizeRickCharacter = () => {
    setRickId(Math.floor(Math.random() * 671) + 1);
  };

  const capitalizePokemonName = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <div className='container'>
        <div className='box'>
          <h2>Pokémon Character</h2>
          <h3>{capitalizePokemonName(pokemon.name)}</h3>
          <img className='character-image' src={pokemon.sprites.front_default} alt={pokemon.name} />
          <button onClick={randomizePokemonCharacter}>Randomize</button>
        </div>

        <div className='box'>
          <h2>Rick & Morty Character</h2>
          <h3>{character.name}</h3>
          <img className='character-image' src={character.image} alt={character.name} />
          <button onClick={randomizeRickCharacter}>Randomize</button>
        </div>
      </div>
    </>
  );
}

export default App;
