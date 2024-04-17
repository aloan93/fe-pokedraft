import pokemonNames from "../../data/pokemonNames";
import { useNavigate } from "react-router-dom";
import { capitalLetter } from "../../utilities/utils";

export default function PokemonSearch() {
  const navigate = useNavigate();

  function submitOption(e) {
    e.preventDefault();
    if (e.target[0].value !== "choose")
      navigate(`/pokemon/${e.target[0].value}`);
  }

  return (
    <form className="dropdownForm" onSubmit={submitOption}>
      <label className="dropdownLabel" htmlFor="pokemonSearch">
        {"Pokemon: "}
      </label>
      <select
        className="dropdownSelect"
        type="text"
        id="pokemonSearch"
        defaultValue="choose"
        required>
        <option key="placeholder" value="choose" hidden>
          {"---Pokemon---"}
        </option>
        {pokemonNames.map((pokemon) => (
          <option key={pokemon} value={pokemon}>
            {capitalLetter(pokemon)}
          </option>
        ))}
      </select>
      <button>{">>"}</button>
    </form>
  );
}
