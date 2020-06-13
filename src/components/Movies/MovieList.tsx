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

    const handleModalClose = () => {
        setSelectedMovie(undefined);
        setModal(undefined);
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
            {selectedMovie && modal === Modal.review && <ReviewModal movie={selectedMovie} onClose={handleModalClose} />}
            {selectedMovie && modal === Modal.quickReview && <QuickReviewModal movie={selectedMovie} onClose={handleModalClose} />}
        </>
    );
};

export default MovieList;