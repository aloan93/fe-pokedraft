import { capitalLetter } from "../../utilities/utils";

export default function TypeFilter({ setTypes, setPage }) {
  const types = [
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ];

  function inputTypes(e) {
    e.preventDefault();
    const typesProvided = [];
    if (e.target[0].value !== "choose" || e.target[1].value !== "choose") {
      e.target[0].value !== "choose"
        ? typesProvided.push(e.target[0].value)
        : null;
      e.target[1].value !== "choose"
        ? typesProvided.push(e.target[1].value)
        : null;
      setTypes(typesProvided);
      setPage(1);
    }
  }

  return (
    <form className="typeFilterForm" onSubmit={inputTypes}>
      <div>
        <label className="dropdownFilterLabel" htmlFor="type1">
          Type 1:{" "}
        </label>
        <select
          className="dropdownFilterSelect"
          type="text"
          id="type1"
          defaultValue="choose"
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
        <label className="dropdownFilterLabel" htmlFor="type2">
          Type 2:{" "}
        </label>
        <select
          className="dropdownFilterSelect"
          type="text"
          id="type2"
          defaultValue="choose"
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
      <button>{">>"}</button>
    </form>
  );
}
