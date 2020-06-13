import React from 'react';
import MovieCard from './MovieCard';
import { CardColumns } from 'react-bootstrap';
import { Movie } from '../../utils/MovieApiProvider';

type Props = {
    movies: Movie[];
};

const MovieList: React.FC<Props> = ({ movies }) => {
    const noResults = movies.length === 0;

    if (noResults) {
        return <strong>Search for a movie</strong>;
    }

    return (
        <CardColumns>
            {movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
        </CardColumns>
    );
};

export default MovieList;