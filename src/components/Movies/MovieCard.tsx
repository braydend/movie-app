import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars';
import { Movie } from '../../types';

const Container = styled.div`
    padding: 4rem;
    flex-basis: 15%;
    margin-bottom: 2rem;
    border: 2px #712ae3 solid;
    border-radius: 4px;
    background-color: #c690f4;
    text-align: center;
`;

const Heading = styled.h1`
    color: #000000;
`;

Container.displayName = 'MovieCardContainer';

type MovieCardProps = {
    movie: Movie;
};

const MovieCard = ({ movie: { title, reviews } }: MovieCardProps) => {
    const averageRating = (reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length);

    return (
        <Container>
            <ReactStars edit={false} count={5} value={averageRating} />
            <Heading>{title}</Heading>
        </Container>
    );
};

export default MovieCard;