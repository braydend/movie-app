import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { CardColumns } from 'react-bootstrap';
import { Movie } from '../../utils/MovieApiProvider';
import ReviewModal from '../ReviewModal';
import QuickReviewModal from './QuickReviewModal';

enum Modal {
    review,
    quickReview,
};

type Props = {
    movies: Movie[];
};

const MovieList: React.FC<Props> = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState<Movie>();
    const [modal, setModal] = useState<Modal>();

    const handleSelection = (movie: Movie, modal: Modal) => {
        setSelectedMovie(movie);
        setModal(modal);
    };
    
    const noResults = movies.length === 0;

    if (noResults) {
        return <strong>Search for a movie</strong>;
    }

    return (
        <>
            <CardColumns>
                {movies.map((movie) => (
                    <MovieCard 
                        key={movie.imdbID} 
                        movie={movie} 
                        onSelect={() => handleSelection(movie, Modal.review)} 
                        onQuickReview={() => handleSelection(movie, Modal.quickReview)} 
                    />
                ))}
            </CardColumns>
            <ReviewModal movie={selectedMovie} onClose={() => setModal(undefined)} onAfterClose={() => setSelectedMovie(undefined)} isOpen={modal === Modal.review} />
            <QuickReviewModal movie={selectedMovie} onClose={() => setModal(undefined)} onAfterClose={() => setSelectedMovie(undefined)} isOpen={modal === Modal.quickReview} />
        </>
    );
};

export default MovieList;