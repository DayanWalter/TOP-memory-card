import { useState, useEffect } from 'react';

export default function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
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
    fetchUserData();
  }, []);
  return (
    <>
      <h1>Pokemon Memory</h1>
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
      {pokemon && (
        <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
      )}
    </>
  );
}
