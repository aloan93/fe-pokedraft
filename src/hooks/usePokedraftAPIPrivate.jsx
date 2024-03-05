import { pokedraftAPIPrivate } from "../api/api";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

export default function usePokedraftAPIPrivate() {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = pokedraftAPIPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = "Bearer " + `${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = pokedraftAPIPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newToken}`;
          return pokedraftAPIPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      pokedraftAPIPrivate.interceptors.request.eject(requestIntercept);
      pokedraftAPIPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth?.accessToken, refresh]);

  return pokedraftAPIPrivate;
}
