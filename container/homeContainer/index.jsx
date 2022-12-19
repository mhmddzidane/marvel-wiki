import React, { useMemo } from "react";
import ImageWrapper from "../../components/atoms/ImageWrapper";
import ComicsSection from "./components/ComicsSection";
import Header from "../../components/molecules/Header";
import { useHomeContext } from "../../providers/homeProviders";
import CharacterSection from "./components/CharacterSection";
import MoviesSection from "./components/MoviesSection";
import Game from "./components/Game";
import Footer from "../../components/molecules/Footer";

function HomeContainer() {
  const { contentState: comics } = useHomeContext();

  const getComics = useMemo(() => {
    return comics.comics.results?.map((comic) => {
      return {
        title: comic?.title ?? "-",
        image: comic?.thumbnail.path + "/portrait_uncanny.jpg" ?? "-",
      };
    });
  }, [comics.comics.results]);

  const getCharacters = useMemo(() => {
    return comics.character.results?.map((hero) => {
      return {
        name: hero?.name ?? "-",
        image: hero?.thumbnail.path + "/portrait_uncanny.jpg" ?? "-",
      };
    });
  }, [comics.character.results]);

  const getMovies = useMemo(() => {
    return comics.movies.map((movie) => {
      return {
        title: movie.title ?? "-",
        image: movie.cover_url ?? "-",
      };
    });
  }, [comics.movies]);

  return (
    <div className=" ">
      <Header />
      <ComicsSection getComics={getComics} />
      <Game />
      <MoviesSection getMovies={getMovies} />
      <CharacterSection getCharacters={getCharacters} />
      <Footer />
    </div>
  );
}

export default HomeContainer;
