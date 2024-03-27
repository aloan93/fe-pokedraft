import { useEffect, useState } from "react";
import { pokedraftAPI } from "../api/api";
import PageNav from "./PageNav";
import Order from "./Order";
import SortBy from "./SortBy";
import TypeFilter from "./TypeFilter";
import { useNavigate, useSearchParams } from "react-router-dom";
import PokemonListCard from "./PokemonListCard";
import abilities from "../../data/abilities";
import pokemonNames from "../../data/pokemonNames";
import DropdownFilter from "./DropdownFilter";
import CurrentFilters from "./CurrentFilters";
import ShownResults from "./ShownResults";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [resultTotal, setResultTotal] = useState(null);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("pokedex_no");
  const [ability, setAbility] = useState(null);
  const [types, setTypes] = useState([]);
  const [singlePokemon, setSinglePokemon] = useState(null);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSinglePokemon(null);
    setIsLoading(true);
    setError(null);
    pokedraftAPI
      .get(
        `/pokemon?limit=20&page=${page}&order=${order}&sort_by=${sortBy}${
          ability ? `&ability=${ability}` : ""
        }${types[0] ? `&type=${types[0]}` : ""}${
          types[1] ? `&type2=${types[1]}` : ""
        }`
      )
      .then(({ data: { total, pokemon } }) => {
        setIsLoading(false);
        setPokemon(pokemon);
        setResultTotal(total);
        setSearchParams((prev) => {
          const nonDefaultParams = {};
          if (types[0]) nonDefaultParams.type1 = types[0];
          if (types[1]) nonDefaultParams.type2 = types[1];
          return { ...prev, page, order, sortBy, ...nonDefaultParams };
        });
      })
      .catch(() => {
        setIsLoading(false);
        setError("Something went wrong");
      });
  }, [page, order, sortBy, ability, types]);

  useEffect(() => {
    singlePokemon ? navigate(`/pokemon/${singlePokemon}`) : null;
  }, [singlePokemon]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="pokemonListDiv">
      <DropdownFilter
        criteria="Pokemon"
        options={pokemonNames}
        setCriteria={setSinglePokemon}
        setPage={setPage}
      />
      <details>
        <summary className="pokemonFilterDropdown">Filter Settings</summary>
        <div className="pokemonFilterOptions">
          <TypeFilter setTypes={setTypes} setPage={setPage} />
          {/* <DropdownFilter
            criteria="Ability"
            options={abilities}
            setCriteria={setAbility}
            setPage={setPage}
          /> */}
        </div>
      </details>
      <CurrentFilters
        object={{
          Typing: [types, setTypes],
          Ability: [ability, setAbility],
        }}
      />
      <div className="pokemonRadioSorting">
        <SortBy sortBy={sortBy} setSortBy={setSortBy} setPage={setPage} />
        <Order order={order} setOrder={setOrder} setPage={setPage} />
      </div>
      <ShownResults resultTotal={resultTotal} page={page} />
      <PageNav page={page} setPage={setPage} resultTotal={resultTotal} />
      <ul className="pokemonUl">
        {pokemon.map((pokemon) => {
          return (
            <li key={pokemon.pokemon_name}>
              <PokemonListCard pokemon={pokemon} />
            </li>
          );
        })}
      </ul>
      <PageNav page={page} setPage={setPage} resultTotal={resultTotal} />
    </div>
  );
}
