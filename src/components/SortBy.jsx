export default function SortBy({ sortBy, setSortBy, setPage }) {
  function inputSortBy(e) {
    if (e.target.value === "Pokedex No.") setSortBy("pokedex_no");
    else if (e.target.value === "A-Z") setSortBy("pokemon_name");
    else setSortBy("speed_stat");
    setPage(1);
  }

  return (
    <>
      <form onChange={inputSortBy}>
        <fieldset>
          <legend>Sort By</legend>
          <label>
            Pokedex No.
            <input
              type="radio"
              value="Pokedex No."
              readOnly
              checked={sortBy === "pokedex_no"}
            />
          </label>
          <label>
            A-Z
            <input
              type="radio"
              value="A-Z"
              readOnly
              checked={sortBy === "pokemon_name"}
            />
          </label>
          <label>
            Speed
            <input
              type="radio"
              value="Speed"
              readOnly
              checked={sortBy === "speed_stat"}
            />
          </label>
        </fieldset>
      </form>
    </>
  );
}
