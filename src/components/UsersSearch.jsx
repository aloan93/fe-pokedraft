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
    <form onSubmit={searchUsername}>
      <label htmlFor="usersSearchInput">Search Username: </label>
      <input
        type="text"
        id="usersSearchInput"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button>{">>"}</button>
    </form>
  );
}
