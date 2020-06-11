import React from 'react';
import ReactStars from 'react-stars';
import { Movie } from '../../types';
import { Card } from 'react-bootstrap';

type MovieCardProps = {
    movie: Movie;
};

const MovieCard = ({ movie: { title, reviews } }: MovieCardProps) => {
    const averageRating = (reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length);

    return (
        <Card>
            <Card.Header>
                <ReactStars edit={false} count={5} size={25} value={averageRating} />
            </Card.Header>
            <Card.Body>
                <h2>{title}</h2>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;