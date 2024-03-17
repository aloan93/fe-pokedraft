import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokedraftAPI, pokeAPI } from "../api/api";
import { capitalLetter } from "../../utilities/utils";

export default function PokemonSingle() {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemonSprite, setPokemonSprite] = useState(null);

  function getHomeSprite() {
    pokeAPI.get(`/pokemon/${pokemonName}`).then(
      ({
        data: {
          sprites: {
            other: {
              home: { front_default },
            },
          },
        },
      }) => setPokemonSprite(front_default)
    );
  }

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    pokedraftAPI
      .get(`/pokemon/${pokemonName}`)
      .then(({ data: { pokemon } }) => {
        getHomeSprite();
        setPokemon(pokemon);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError("Something went wrong");
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="singlePokemon">
      <div className="singlePokemonDetails">
        <h3>{`#${pokemon.pokedex_no} ${capitalLetter(
          pokemon.pokemon_name
        )}`}</h3>
        <div className="typeDiv">
          <p className="type1Tag" id={`type${capitalLetter(pokemon.type_1)}`}>
            {capitalLetter(pokemon.type_1)}
          </p>
          {pokemon?.type_2 ? (
            <p className="type2Tag" id={`type${capitalLetter(pokemon.type_2)}`}>
              {capitalLetter(pokemon.type_2)}
            </p>
          ) : null}
        </div>
        <label>Abilities:</label>
        <p className="singlePokemonText">{capitalLetter(pokemon.ability_1)}</p>
        {pokemon?.ability_2 ? (
          <p className="singlePokemonText">
            {capitalLetter(pokemon.ability_2)}
          </p>
        ) : null}
        {pokemon?.ability_3 ? (
          <p className="singlePokemonText">
            {capitalLetter(pokemon.ability_3)}
          </p>
        ) : null}
        <label>Speed Stat:</label>
        <p className="singlePokemonText">{pokemon.speed_stat}</p>
      </div>
      <img
        src={pokemonSprite}
        alt={`Pokemon HOME sprite for ${pokemon.pokemon_name}`}
      />
    </div>
  );
}
