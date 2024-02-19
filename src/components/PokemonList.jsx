import { useEffect, useState } from "react";
import pokedraftAPI from "../api/api";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    pokedraftAPI
      .get(`/pokemon`)
      .then(({ data: { total, pokemon } }) => {
        setIsLoading(false);
        setPokemon(pokemon);
      })
      .catch(() => {
        setIsLoading(false);
        setError("Something went wrong");
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <ul>
        {pokemon.map((pokemon) => {
          return (
            <li key={pokemon.pokemon_name}>
              <p>{pokemon.pokemon_name}</p>
              <p>{pokemon.type_1}</p>
              <p>{pokemon.type_2}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
