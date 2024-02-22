import { useState } from "react";
import { Link } from "react-router-dom";

export default function PokemonLink() {
  const [newInput, setNewInput] = useState("");

  return (
    <>
      <form>
        <label htmlFor="pokemonLink">Pokemon:</label>
        <input
          id="pokemonLink"
          type="text"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
        />
        <Link to={`/pokemon/${newInput}`}>Search</Link>
      </form>
    </>
  );
}
