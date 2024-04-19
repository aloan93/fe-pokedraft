import { useEffect, useState } from "react";
import { pokedraftAPI } from "../api/api";
import PageNav from "./PageNav";
import Order from "./Order";
import SortBy from "./SortBy";
import TypeFilter from "./TypeFilter";
import { useNavigate, useSearchParams } from "react-router-dom";
import PokemonListCard from "./PokemonListCard";
import DropdownFilter from "./DropdownFilter";
import CurrentFilters from "./CurrentFilters";
import ShownResults from "./ShownResults";
import PokemonSearch from "./PokemonSearch";
import PokemonFilters from "./PokemonFilters";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [resultTotal, setResultTotal] = useState(null);
  const [singlePokemon, setSinglePokemon] = useState(null);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const order = searchParams.get("order") || "asc";
  const sortBy = searchParams.get("sortBy") || "pokedex_no";
  const type1 = searchParams.get("type1") || "";
  const type2 = searchParams.get("type2") || "";
  const ability = searchParams.get("ability") || "";

  useEffect(() => {
    setSinglePokemon(null);
    setIsLoading(true);
    setError(null);
    pokedraftAPI
      .get(
        `/pokemon?limit=20&page=${page}&order=${order}&sort_by=${sortBy}&ability=${ability}&type=${type1}&type2=${type2}`
      )
      .then(({ data: { total, pokemon } }) => {
        setIsLoading(false);
        setPokemon(pokemon);
        setResultTotal(total);
      })
      .catch(() => {
        setIsLoading(false);
        setError("Something went wrong");
      });
  }, [searchParams]);

  useEffect(() => {
    singlePokemon ? navigate(`/pokemon/${singlePokemon}`) : null;
  }, [singlePokemon]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="pokemonListDiv">
      <PokemonSearch />
      <details>
        <summary className="pokemonFilterDropdown">Filter Settings</summary>
        <div className="pokemonFilterOptions">
          <PokemonFilters
            setSearchParams={setSearchParams}
            type1={type1}
            type2={type2}
            ability={ability}
          />
        </div>
      </details>
      <CurrentFilters
        filters={{ type1, type2, ability }}
        setSearchParams={setSearchParams}
      />
      <div className="pokemonRadioSorting">
        <SortBy sortBy={sortBy} setSearchParams={setSearchParams} />
        <Order order={order} setSearchParams={setSearchParams} />
      </div>
      <ShownResults resultTotal={resultTotal} page={page} />
      <PageNav
        page={page}
        setSearchParams={setSearchParams}
        resultTotal={resultTotal}
      />
      <ul className="pokemonUl">
        {pokemon.map((pokemon) => {
          return (
            <li key={pokemon.pokemon_name}>
              <PokemonListCard pokemon={pokemon} />
            </li>
          );
        })}
      </ul>
      <PageNav
        page={page}
        setSearchParams={setSearchParams}
        resultTotal={resultTotal}
      />
    </div>
  );
}
