import React from "react";
import { useState, useEffect } from "react";
import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";
import movieData from "./utils/movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [maxLength, setMaxLength] = useState("");
  const [sortOrder, setSortOrder] = useState(true);

  const sortHandler = () => {
    setMovies(
      movies.sort((a, b) => {
        if (sortOrder) {
          setSortOrder(false);
          return a.length - b.length;
        } else {
          setSortOrder(true);
          return b.length - a.length;
        }
      })
    );
  };

  useEffect(() => {
    setMovies(
      movieData.filter((movie) => {
        return (
          movie.title.toUpperCase().includes(search.toUpperCase()) &&
          ([NaN, 0].includes(parseInt(maxLength, 10)) ||
            parseInt(maxLength, 10) >= movie.length)
        );
      })
    );
  }, [search, maxLength]);

  return (
    <>
      {/* Header Bar for Searching */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        maxLength={maxLength}
        setMaxLength={setMaxLength}
        sortMovies={sortHandler}
      />
      {/* Output the Movies */}
      <Movies movies={movies} />
    </>
  );
}

export default App;