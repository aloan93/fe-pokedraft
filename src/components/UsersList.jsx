import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { pokedraftAPI } from "../api/api";
import ShownResults from "./ShownResults";
import UsersListCard from "./UsersListCard";
import UsersSearch from "./UsersSearch";

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
      .get(`/users?limit=10&page=${page}&order=${order}`)
      .then(({ data: { total, users } }) => {
        if (username) {
          const filteredUsers = users.filter((u) =>
            u.username.includes(username)
          );
          setUsers(filteredUsers);
          setResultTotal(filteredUsers.length);
        } else {
          setUsers(users);
          setResultTotal(total);
        }
        setIsInvalidPage(page * 10 - 9 > total && page !== 1);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setIsLoading(false);
      });
  }, [searchParams]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <p>this is the users list page</p>
      <UsersSearch setSearchParams={setSearchParams} />
      <ShownResults
        resultTotal={resultTotal}
        page={page}
        isInvalidPage={isInvalidPage}
      />
      <ul className="usersListUl">
        {users.map((user) => {
          return (
            <li key={user.username}>
              <UsersListCard user={user} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
