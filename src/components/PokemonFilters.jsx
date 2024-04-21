import types from "../../data/types";
import abilities from "../../data/abilities";
import { capitalLetter } from "../../utilities/utils";

export default function PokemonFilters({
  setSearchParams,
  type1,
  type2,
  ability,
}) {
  function submitOption(e) {
    e.preventDefault();

    const type1Option = e.target[0].value;
    const type2Option = e.target[1].value;
    const abilityOption = e.target[2].value;

    setSearchParams((prev) => {
      if (type1Option !== "choose") prev.set("type1", type1Option);
      if (type2Option !== "choose") prev.set("type2", type2Option);
      if (abilityOption !== "choose") prev.set("ability", abilityOption);
      prev.delete("page");
      return prev;
    });
  }

  return (
    <details>
      <summary className="pokemonFiltersSummary">Filters</summary>
      <form className="pokemonFiltersForm" onSubmit={submitOption}>
        <div>
          <label className="pokemonFiltersLabel" htmlFor="type1">
            {"Type 1: "}
          </label>
          <select
            className="pokemonFiltersSelect"
            type="text"
            id="type1"
            defaultValue={type1 || "choose"}
            required>
            <option key="placeholder" value="choose" hidden>
              ---Type 1---
            </option>
            {types.map((type) => (
              <option key={type} value={type}>
                {capitalLetter(type)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="pokemonFiltersLabel" htmlFor="type2">
            {"Type 2: "}
          </label>
          <select
            className="pokemonFiltersSelect"
            type="text"
            id="type2"
            defaultValue={type2 || "choose"}
            required>
            <option key="placeholder" value="choose" hidden>
              ---Type 2---
            </option>
            {types.map((type) => (
              <option key={type} value={type}>
                {capitalLetter(type)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="pokemonFiltersLabel" htmlFor="ability">
            {"Ability: "}
          </label>
          <select
            className="pokemonFiltersSelect"
            type="text"
            id="ability"
            defaultValue={ability || "choose"}
            required>
            <option key="placeholder" value="choose" hidden>
              ---Ability---
            </option>
            {abilities.map((ability) => (
              <option key={ability} value={ability}>
                {capitalLetter(ability)}
              </option>
            ))}
          </select>
        </div>
        <button>{">>"}</button>
      </form>
    </details>
  );
}
