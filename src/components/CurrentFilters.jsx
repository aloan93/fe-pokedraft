import { capitalLetter } from "../../utilities/utils";

export default function CurrentFilters({ object }) {
  let currentFilters = "Current Filters:";
  for (let i in object) {
    if (object[i][0])
      if (typeof object[i][0] !== "object")
        currentFilters += ` ${i} - ${capitalLetter(object[i][0])},`;
      else {
        if (object[i][0][0]) {
          const join = [...object[i][0]]
            .map((e) => capitalLetter(e))
            .join(" & ");
          currentFilters += ` ${i} - ${join},`;
        }
      }
  }

  function clearFilters(e) {
    e.preventDefault();
    for (let i in object) {
      if (typeof object[i] !== "object") object[i][1](null);
      else object[i][1]([]);
    }
  }

  if (currentFilters === "Current Filters:") return null;
  return (
    <div className="currentFilters">
      <p>{currentFilters.slice(0, currentFilters.length - 1)}</p>
      <button onClick={clearFilters}>Clear Filters</button>
    </div>
  );
}
