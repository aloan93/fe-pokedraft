import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { pokedraftAPI } from "../api/api";

export default function ProfileSettings() {
  const { user, setUser, token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [input, setInput] = useState({ username: "" });

  function submitEditsAttempt(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    pokedraftAPI.patch(`/users/${user.user_id}`);
  }

  function handleInput(e) {
    const { id, value } = e.target;
    setInput((input) => ({
      ...input,
      [id]: value,
    }));
  }

  if (isLoading) return <p>Loading...</p>;
  else
    return (
      <>
        <form onSubmit={submitEditsAttempt}>
          <label htmlFor="username">New Username:</label>
          <input id="username" type="text" onChange={handleInput} />
          <p>{`Current username: ${user.username}`}</p>
          <button>Submit</button>
        </form>
        {error ? <p>{error}</p> : null}
      </>
    );
}
