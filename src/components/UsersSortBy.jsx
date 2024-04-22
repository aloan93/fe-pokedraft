export default function UsersSortBy({ sortBy, setSearchParams }) {
  function inputSortBy(e) {
    setSearchParams((prev) => {
      if (e.target.value === "Join Date") prev.set("sortBy", "join_date");
      else prev.set("sortBy", "username");
      prev.delete("page");
      return prev;
    });
  }

  return (
    <form className="radioSorting" onChange={inputSortBy}>
      <fieldset>
        <legend>Sort By</legend>
        <label htmlFor="joinDate">
          Join Date
          <input
            id="joinDate"
            type="radio"
            value="Join Date"
            readOnly
            checked={sortBy === "join_date"}
          />
        </label>
        <label htmlFor="alphabetical">
          A-Z
          <input
            id="alphabetical"
            type="radio"
            value="A-Z"
            readOnly
            checked={sortBy === "username"}
          />
        </label>
      </fieldset>
    </form>
  );
}
