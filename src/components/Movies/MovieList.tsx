import React, { useState } from 'react';
import { Movie, Scalars } from '../../types';
import ReactStars from 'react-stars';
import styled from 'styled-components';
import NewReviewModal from './NewReviewModal';

type ListItemProps = {
    movie: Movie;
};

const ListItem: React.FC<ListItemProps> = ({ movie }) => {
    const [newRating, setNewRating] = useState<number>(0);

    const Container = styled.li`
        list-style-type: none;
        background-color: #00f5d4;
        padding: 0.5rem;
        border-radius: 5px;
        border: 4px solid #00BBF9;
        margin-bottom: 0.25rem;
        display: flex;
        justify-content: space-between;

        &:last-of-type{
            margin-bottom: 0;
        }
    `;

    const Reviews = styled.div`
        flex-basis: 50%;
    `;

    const ratingSum = movie.reviews.reduce((acc, { rating: cur }) => {
        return acc + cur;
    }, 0);
    const averageRating = ratingSum / movie.reviews.length;

    const isReviewed = movie.reviews.length < 0;

    const handleRating = (rating: number) => {
        setNewRating(rating);
    };

    const handleModalClose = () => {
        setNewRating(0);
    };

    return (
        <Container>
            <h1>{movie.title}</h1>
            {isReviewed ? (
                <Reviews>
                    <ReactStars count={5} value={averageRating} />
                    <small>
                        Reviewed by:
                        {movie.reviews.map(({ reviewer }) => `- ${reviewer}`)}
                    </small>
                </Reviews>
            ) : (
                <div>
                    <small>This movie hasn't been reviewed yet, be the first one!</small>
                    <ReactStars count={5} onChange={handleRating} half={false} />
                </div>
            )}
            {/* This isn't ideal. This will render one modal per list item. Prefer this in the parent list */}
            <NewReviewModal isOpen={!!newRating} movie_id={movie._id} rating={newRating} onClose={handleModalClose} />
        </Container>
    );
};

type Props = {
    movies: Movie[];
};

const MovieList: React.FC<Props> = ({ movies }) => {
    const Container = styled.ul`
        padding-left: 0;
        flex-grow: 1;
    `;

    return (
        <Container id="movies">
            {movies.map(movie => <ListItem key={movie._id} movie={movie} />)}
        </Container>
    );
};

export default MovieList;