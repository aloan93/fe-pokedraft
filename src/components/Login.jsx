import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { pokedraftAPI } from "../api/api";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const [newUsernameInput, setNewUsernameInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [error, setError] = useState(null);

  function loginAttempt(e) {
    e.preventDefault();
    setError(null);
    pokedraftAPI
      .post("/users/login", {
        username: newUsernameInput,
        password: newPasswordInput,
      })
      .then(() => {
        setUser(newUsernameInput);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }

  return (
    <>
      {user ? <p>{`Logged in as ${user}`}</p> : null}
      {error ? <p>{error}</p> : null}
      <form onSubmit={loginAttempt}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={newUsernameInput}
          onChange={(e) => setNewUsernameInput(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={newPasswordInput}
          onChange={(e) => setNewPasswordInput(e.target.value)}
        />
        <button>Login</button>
      </form>
    </>
  );
}
