import { Link } from "react-router-dom";
import { capitalLetter } from "../../utilities/utils";

export default function PokemonListCard({ pokemon }) {
  return (
    <li key={pokemon.pokemon_name}>
      <div className="pokemonListCardDiv">
        <Link to={`/pokemon/${pokemon.pokemon_name}`}>
          {`#${pokemon.pokedex_no} ${capitalLetter(pokemon.pokemon_name)}`}
        </Link>
        <div className="typeDiv">
          <p className="typeTag" id="type1">
            {capitalLetter(pokemon.type_1)}
          </p>
          {pokemon?.type_2 ? (
            <p className="typeTag" id="type2">
              {capitalLetter(pokemon.type_2)}
            </p>
          ) : null}
        </div>
      </div>
    </li>
  );
}
