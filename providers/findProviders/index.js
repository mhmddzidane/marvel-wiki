import { createContext, useContext, useEffect, useState } from "react";
import ApiRequest from "../../config/config";

export function createCtx() {
  const ctx = createContext(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error("useCtx must be inside a Provider withds a value");
    return c;
  }
  return [useCtx, ctx.Provider];
}

export const [useFindContext, CtxProvider] = createCtx();

export const FindProvider = ({ children }) => {
  const [query, setQuery] = useState([]);
  const [search, setSearch] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchQuery = async () => {
    try {
      setLoading(true);
      const payload = {
        url: `${process.env.url}characters?name=${search}&ts=1&apikey=${process.env.public}&hash=${process.env.hash}`,
      };
      const {
        data: { data: response },
      } = await ApiRequest.get(payload);
      setQuery(response);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  const contentState = {
    query,
    setQuery,
    search,
    setSearch,
    searchQuery,
    error,
    loading,
  };

  const state = {
    contentState,
  };

  useEffect(() => {
    searchQuery();
  }, [search]);

  return <CtxProvider value={state}>{children}</CtxProvider>;
};
