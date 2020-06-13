import React, { useState } from 'react';
import Searchbar from '../Searchbar';
import { Movie, searchByTitle } from '../../utils/MovieApiProvider';
import debounce from 'lodash.debounce';
import MovieList from './MovieList';

const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    const handleSearch = debounce((query: string) => {
        searchByTitle(query, setMovies, console.error);
    }, 300);

    return (
        <>
            <Searchbar onChange={handleSearch} />
            <MovieList movies={movies} />
        </>
    );
};

export default Movies;
