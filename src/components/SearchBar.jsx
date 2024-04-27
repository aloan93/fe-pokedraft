import { useState } from "react";

export default function SearchBar({ param, setSearchParams }) {
  const [search, setSearch] = useState("");

  function submitSearch(e) {
    e.preventDefault();
    setSearchParams((prev) => {
      prev.set(param, search);
      prev.delete("page");
      return prev;
    });
  }

  return (
    <form className="searchBarForm" onSubmit={submitSearch}>
      <label className="searchBarLabel" htmlFor={`${param}Search`}>
        {`Search ${param}: `}
      </label>
      <input
        className="searchBarInput"
        type="text"
        id={`${param}Search`}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
      <button>{">>"}</button>
    </form>
  );
}
