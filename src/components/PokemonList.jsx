import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { pokedraftAPI } from "../api/api";
import PageNav from "./PageNav";
import Order from "./Order";
import PokemonListCard from "./PokemonListCard";
import CurrentFilters from "./CurrentFilters";
import ShownResults from "./ShownResults";
import PokemonFilters from "./PokemonFilters";
import PokemonSortBy from "./PokemonSortBy";
import SearchBar from "./SearchBar";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [resultTotal, setResultTotal] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const order = searchParams.get("order") || "asc";
  const sortBy = searchParams.get("sortBy") || "pokedex_no";
  const type1 = searchParams.get("type1") || "";
  const type2 = searchParams.get("type2") || "";
  const ability = searchParams.get("ability") || "";
  const name = searchParams.get("name") || "";
  const [isInvalidPage, setIsInvalidPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    pokedraftAPI
      .get(
        `/pokemon?limit=20&page=${page}&order=${order}&sort_by=${sortBy}&ability=${ability}&type=${type1}&type2=${type2}&pokemon_name=${name}`
      )
      .then(({ data: { total, pokemon } }) => {
        setPokemon(pokemon);
        setResultTotal(total);
        setIsInvalidPage(page * 20 - 19 > total && page !== 1);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setIsLoading(false);
      });
  }, [searchParams]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <SearchBar param={"name"} setSearchParams={setSearchParams} />
      <PokemonFilters
        setSearchParams={setSearchParams}
        type1={type1}
        type2={type2}
        ability={ability}
      />
      <CurrentFilters
        filters={{ type1, type2, ability, name }}
        setSearchParams={setSearchParams}
      />
      <div className="radioSortingDiv">
        <PokemonSortBy sortBy={sortBy} setSearchParams={setSearchParams} />
        <Order order={order} setSearchParams={setSearchParams} />
      </div>
      <ShownResults
        resultTotal={resultTotal}
        page={page}
        isInvalidPage={isInvalidPage}
        limit={20}
      />
      <PageNav
        page={page}
        setSearchParams={setSearchParams}
        resultTotal={resultTotal}
        isInvalidPage={isInvalidPage}
        limit={20}
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
        isInvalidPage={isInvalidPage}
        limit={20}
      />
    </>
  );
}
