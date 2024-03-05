import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

export default function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    function verifyRefreshToken() {
      refresh()
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    console.log(`user: ${auth?.username}`);
    console.log(`AT: ${auth?.accessToken}`);
  }, [isLoading]);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
}
