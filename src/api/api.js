import axios from "axios";

const pokedraftAPI = axios.create({
  baseURL: "http://localhost:9000/api",
});

export default pokedraftAPI;
