import { useEffect, useState } from "react";
import pokedraftAPI from "../api/api";
import PageNav from "./PageNav";
import Order from "./Order";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [resultTotal, setResultTotal] = useState(null);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    pokedraftAPI
      .get(`/pokemon?page=${page}&order=${order}`)
      .then(({ data: { total, pokemon } }) => {
        setIsLoading(false);
        setPokemon(pokemon);
        setResultTotal(total);
      })
      .catch(() => {
        setIsLoading(false);
        setError("Something went wrong");
      });
  }, [page, order]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
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
