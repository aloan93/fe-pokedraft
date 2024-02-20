import { useState } from "react";

export default function SearchBar({ criteria, setCriteria, setPage }) {
  const [newInput, setNewInput] = useState("");

  function inputSearch(e) {
    e.preventDefault();
    setCriteria(newInput);
    setPage(1);
  }

  return (
    <>
      <form onSubmit={inputSearch}>
        <label htmlFor={criteria + "Search"}>{criteria}</label>
        <input
          id={criteria + "Search"}
          type="text"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
        />
        <button>Search</button>
      </form>
    </>
  );
}
