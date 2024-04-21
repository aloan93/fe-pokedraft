import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { pokedraftAPI } from "../api/api";
import ShownResults from "./ShownResults";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [resultTotal, setResultTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const order = searchParams.get("order") || "asc";
  const username = searchParams.get("username") || "";
  const [isInvalidPage, setIsInvalidPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    pokedraftAPI
      .get(`/users?limit=10&page=${page}&order=${order}&username=${username}`)
      .then(({ data: { total, users } }) => {
        setIsLoading(false);
        setUsers(users);
        setResultTotal(total);
        setIsInvalidPage(page * 10 - 9 > total && page !== 1);
      })
      .catch(() => {
        setIsLoading(false);
        setError("Something went wrong");
      });
  }, [searchParams]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <p>this is the users list page</p>
      <ShownResults
        resultTotal={resultTotal}
        page={page}
        isInvalidPage={isInvalidPage}
      />
      {users.map((user) => {
        return <p>{user.username}</p>;
      })}
    </>
  );
}
