import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { CardColumns } from 'react-bootstrap';
import { Movie } from '../../utils/MovieApiProvider';
import ReviewModal from '../ReviewModal';

type Props = {
    movies: Movie[];
};

const MovieList: React.FC<Props> = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState<Movie>();
    
    const noResults = movies.length === 0;

    if (noResults) {
        return <strong>Search for a movie</strong>;
    }

    return (
        <>
            <CardColumns>
                {movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} onSelect={() => setSelectedMovie(movie)} />)}
            </CardColumns>
            {selectedMovie && <ReviewModal movie={selectedMovie} onClose={() => setSelectedMovie(undefined)} />}
        </>
    );
};

export default MovieList;