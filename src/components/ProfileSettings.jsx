import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import usePokedraftAPIPrivate from "../hooks/usePokedraftAPIPrivate";
import { useNavigate, useLocation } from "react-router-dom";

export default function ProfileSettings() {
  const { user, setUser, setToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [input, setInput] = useState({ username: "" });
  const [isSaved, setIsSaved] = useState(false);
  const pokedraftAPIPrivate = usePokedraftAPIPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {}, [user]);

  function submitEditsAttempt(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    pokedraftAPIPrivate
      .patch(`/users/${user.user_id}`, input)
      .then(({ data: { user } }) => {
        setUser(user);
        setIsSaved(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 403) {
          setUser();
          setToken();
          navigate("/login", { state: { from: location }, replace: true });
        } else if (err.response.data.message)
          setError(err.response.data.message);
        else setError("Something went wrong. Please try again later");
        setIsLoading(false);
      });
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
        {isSaved ? <p>{"Changes saved :)"}</p> : null}
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
