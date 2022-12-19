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

export const [useHomeContext, CtxProvider] = createCtx();

export const HomeProvider = ({ children }) => {
  const [comics, setComics] = useState([]);
  const [character, setCharacter] = useState([]);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState([]);

  const getAllComics = async () => {
    try {
      const payload = {
        url: `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=ea6ea9d4c5e0f728bc62e298c7c88489&hash=354113ac364b3629affa064b1a314a5e`,
      };
      const {
        data: { data: response },
      } = await ApiRequest.get(payload);
      setComics(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCharacter = async () => {
    try {
      const payload = {
        url: `http://gateway.marvel.com/v1/public/characters?events=116&orderBy=name&ts=1&apikey=ea6ea9d4c5e0f728bc62e298c7c88489&hash=354113ac364b3629affa064b1a314a5e`,
      };
      const {
        data: { data: response },
      } = await ApiRequest.get(payload);
      setCharacter(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllMovies = async () => {
    try {
      const payload = {
        url: `https://mcuapi.herokuapp.com/api/v1/movies`,
      };
      const {
        data: { data: response },
      } = await ApiRequest.get(payload);
      setMovies(response);
    } catch (error) {
      console.log(error);
    }
  };

  const contentState = {
    comics,
    character,
    movies,
    setMovies,
    setCharacter,
    setComics,
  };

  const state = {
    contentState,
  };

  useEffect(() => {
    getAllComics();
    getAllCharacter();
    getAllMovies();
  }, []);

  return <CtxProvider value={state}>{children}</CtxProvider>;
};
