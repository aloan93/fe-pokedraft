import { capitalLetter } from "../../utilities/utils";

export default function CurrentFilters({ filters, setSearchParams }) {
  let currentFilters = "Current Filters: ";
  const filterStrings = [];

  for (let f in filters) {
    if (filters[f])
      filterStrings.push(`${capitalLetter(f)} - ${capitalLetter(filters[f])}`);
  }

  currentFilters += filterStrings.join(", ");

  function clearFilters(e) {
    e.preventDefault();
    setSearchParams((prev) => {
      for (let f in filters) {
        prev.delete(`${f}`);
      }
      prev.delete("page");
      return prev;
    });
  }

  if (currentFilters === "Current Filters: ") return null;
  return (
    <div className="currentFilters">
      <p>{currentFilters}</p>
      <button onClick={clearFilters}>Clear Filters</button>
    </div>
  );
}
