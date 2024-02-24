import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/User";
import { pokedraftAPI } from "../api/api";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/profile");
  }, [user]);

  function signUpAttempt(e) {
    e.preventDefault();
    if (input.password !== input.retypePassword)
      setError("Passwords does not match");
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
        input.password
      )
    )
      setError("Please enter a valid password");
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
          <ul>
            <li>
              <p>{`Must be between 8-15 characters - ${
                input.password.length > 7 && input.password.length < 16
                  ? "O"
                  : "X"
              }`}</p>
            </li>
            <li>
              <p>{`Must contain at least one lower case letter - ${
                /[a-z]/.test(input.password) ? "O" : "X"
              }`}</p>
            </li>
            <li>
              <p>{`Must contain at least one upper case letter - ${
                /[A-Z]/.test(input.password) ? "O" : "X"
              }`}</p>
            </li>
            <li>
              <p>{`Must contain at least one number - ${
                /[\d]/.test(input.password) ? "O" : "X"
              }`}</p>
            </li>
            <li>
              <p>{`Must contain at least one special character (!@#$%^&*.?) - ${
                /[!@#$%^&*.?]/.test(input.password) ? "O" : "X"
              }`}</p>
            </li>
          </ul>
          <label htmlFor="retypePassword">Retype Password:</label>
          <input id="retypePassword" type="password" onChange={handleInput} />
          <button>Sign-Up</button>
        </form>
        {error ? <p>{error}</p> : null}
      </>
    );
}
