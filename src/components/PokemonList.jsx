import { useEffect, useState } from "react";
import pokedraftAPI from "../api/api";
import PageNav from "./PageNav";
import Order from "./Order";
import SortBy from "./SortBy";
import SearchBar from "./SearchBar";
import TypeSearch from "./TypeSearch";

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

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    pokedraftAPI
      .get(
        `/pokemon?page=${page}&order=${order}&sort_by=${sortBy}${
          ability ? `&ability=${ability}` : ""
        }${types[0] ? `&type=${types[0]}` : ""}${
          types[1] ? `&type2=${types[1]}` : ""
        }`
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
  }, [page, order, sortBy, ability, types]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <TypeSearch setTypes={setTypes} setPage={setPage} />
      <SearchBar
        criteria="Ability"
        setCriteria={setAbility}
        setPage={setPage}
      />
      <SortBy sortBy={sortBy} setSortBy={setSortBy} setPage={setPage} />
      <Order order={order} setOrder={setOrder} setPage={setPage} />
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
      <PageNav page={page} setPage={setPage} resultTotal={resultTotal} />
    </>
  );
}
