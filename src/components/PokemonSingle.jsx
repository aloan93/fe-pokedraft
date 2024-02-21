import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pokedraftAPI from "../api/api";

export default function PokemonSingle() {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    pokedraftAPI
      .get(`/pokemon/${pokemonName}`)
      .then(({ data: { pokemon } }) => {
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
      <p>{pokemon.pokemon_name}</p>
      <p>{pokemon.type_1}</p>
      <p>{pokemon.type_2}</p>
      <p>{pokemon.ability_1}</p>
      <p>{pokemon.ability_2}</p>
      <p>{pokemon.ability_3}</p>
      <p>{pokemon.speed_stat}</p>
    </>
  );
}
