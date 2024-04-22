export default function PokemonSortBy({ sortBy, setSearchParams }) {
  function inputSortBy(e) {
    setSearchParams((prev) => {
      if (e.target.value === "Pokedex No.") prev.set("sortBy", "pokedex_no");
      else if (e.target.value === "A-Z") prev.set("sortBy", "pokemon_name");
      else prev.set("sortBy", "speed_stat");
      prev.delete("page");
      return prev;
    });
  }

  return (
    <form className="radioSorting" onChange={inputSortBy}>
      <fieldset>
        <legend>Sort By</legend>
        <label htmlFor="pokedexNumber">
          Pokedex No.
          <input
            id="pokedexNumber"
            type="radio"
            value="Pokedex No."
            readOnly
            checked={sortBy === "pokedex_no"}
          />
        </label>
        <label htmlFor="alphabetical">
          A-Z
          <input
            id="alphabetical"
            type="radio"
            value="A-Z"
            readOnly
            checked={sortBy === "pokemon_name"}
          />
        </label>
        <label htmlFor="speedStat">
          Speed
          <input
            id="speedStat"
            type="radio"
            value="Speed"
            readOnly
            checked={sortBy === "speed_stat"}
          />
        </label>
      </fieldset>
    </form>
  );
}
