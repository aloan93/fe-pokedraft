import { useState } from "react";

export default function UsersSearch({ setSearchParams }) {
  const [username, setUsername] = useState("");

  function searchUsername(e) {
    e.preventDefault();
    setSearchParams((prev) => {
      prev.set("username", username);
      prev.delete("page");
      return prev;
    });
  }

  return (
    <form className="usersSearchForm" onSubmit={searchUsername}>
      <label className="usersSearchLabel" htmlFor="usersSearch">
        {"Search User: "}
      </label>
      <input
        className="usersSearchInput"
        type="text"
        id="usersSearch"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button>{">>"}</button>
    </form>
  );
}
