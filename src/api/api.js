import axios from "axios";

const pokedraftAPI = axios.create({
  baseURL: "http://localhost:9000/api",
});

const authServer = axios.create({ baseURL: "http://localhost:9001" });

const pokeAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export { pokedraftAPI, authServer, pokeAPI };
