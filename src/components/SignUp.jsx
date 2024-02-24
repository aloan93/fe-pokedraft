import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/User";
import { pokedraftAPI } from "../api/api";
import { useNavigate } from "react-router-dom";
import PasswordAuth from "./PasswordAuth";

export default function SignUp() {
  const { user, setUser } = useContext(UserContext);
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    retypePassword: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/profile");
  }, [user]);

  function signUpAttempt(e) {
    e.preventDefault();
    if (input.password !== input.retypePassword)
      setError("Passwords does not match");
    else if (!isPasswordValid) setError("Please enter a valid password");
    else {
      setIsLoading(true);
      setError(null);
      pokedraftAPI
        .post("/users", {
          username: input.username,
          password: input.password,
          email: input.email,
        })
        .then(({ data: { user } }) => {
          setUser(user);
          setIsLoading(false);
        })
        .catch(
          ({
            response: {
              data: { message },
            },
          }) => {
            setIsLoading(false);
            setError(message);
          }
        );
    }
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
        <form onSubmit={signUpAttempt}>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" onChange={handleInput} />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" onChange={handleInput} />
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" onChange={handleInput} />
          <PasswordAuth
            password={input.password}
            setIsPasswordValid={setIsPasswordValid}
          />
          <label htmlFor="retypePassword">Retype Password:</label>
          <input id="retypePassword" type="password" onChange={handleInput} />
          <button>Sign-Up</button>
        </form>
        {error ? <p>{error}</p> : null}
      </>
    );
}
