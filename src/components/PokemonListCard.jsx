import { Link } from "react-router-dom";
import { capitalLetter } from "../../utilities/utils";

export default function PokemonListCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.pokemon_name}`}>
      <div className="pokemonListCardDiv">
        <p className="pokemonNumName">{`#${pokemon.pokedex_no} ${capitalLetter(
          pokemon.pokemon_name
        )}`}</p>
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
      </div>
    </Link>
  );
}
