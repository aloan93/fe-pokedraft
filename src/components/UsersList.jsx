import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { pokedraftAPI } from "../api/api";
import ShownResults from "./ShownResults";
import UsersListCard from "./UsersListCard";
import CurrentFilters from "./CurrentFilters";
import Order from "./Order";
import UsersSortBy from "./UsersSortBy";
import PageNav from "./PageNav";
import SearchBar from "./SearchBar";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [resultTotal, setResultTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const sortBy = searchParams.get("sortBy") || "join_date";
  const order = searchParams.get("order") || "asc";
  const username = searchParams.get("username") || "";
  const [isInvalidPage, setIsInvalidPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    pokedraftAPI
      .get(
        `/users?limit=10&page=${page}&order=${order}&sort_by=${sortBy}&username=${username}`
      )
      .then(({ data: { total, users } }) => {
        setUsers(users);
        setResultTotal(total);
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
      <SearchBar param={"username"} setSearchParams={setSearchParams} />
      <CurrentFilters
        filters={{ username }}
        setSearchParams={setSearchParams}
      />
      <div className="radioSortingDiv">
        <UsersSortBy sortBy={sortBy} setSearchParams={setSearchParams} />
        <Order order={order} setSearchParams={setSearchParams} />
      </div>
      <ShownResults
        resultTotal={resultTotal}
        page={page}
        isInvalidPage={isInvalidPage}
        limit={10}
      />
      <PageNav
        page={page}
        setSearchParams={setSearchParams}
        resultTotal={resultTotal}
        isInvalidPage={isInvalidPage}
        limit={10}
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
      <PageNav
        page={page}
        setSearchParams={setSearchParams}
        resultTotal={resultTotal}
        isInvalidPage={isInvalidPage}
        limit={10}
      />
    </>
  );
}
