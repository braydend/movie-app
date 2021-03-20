import React, { useState } from "react";
import Searchbar from "../Searchbar";
import debounce from "lodash.debounce";
import MovieList from "./MovieList";
import { useSearchMoviesByName } from "./hooks";

const Movies = () => {
  const [query, setQuery] = useState<string>("");

  const { isLoading, data } = useSearchMoviesByName(query);

  const handleSearch = debounce((q: string) => {
    setQuery(q);
  }, 1000);

  return (
    <>
      <Searchbar onChange={handleSearch} value={query} />
      {isLoading ? <>loading...</> : <MovieList movies={data.Search ?? []} />}
    </>
  );
};

export default Movies;
