import { useState, useEffect } from 'react';

export default function Pokemon({ id }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}/`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        let actualData = await response.json();

        setPokemon(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonData();
  }, []);

  function firstLetterUpperCase(name) {
    return name[0].toUpperCase() + name.slice(1);
  }

  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
      {pokemon && (
        <>
          <img
            key={id}
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
          <p>{firstLetterUpperCase(pokemon.name)}</p>
        </>
      )}
    </>
  );
}
