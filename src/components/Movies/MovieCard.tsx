import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Movie, getMovieByImdbId } from '../../utils/MovieApiProvider';

type Props = {
    movie: Movie;
    onSelect: () => void;
};

const MovieCard: React.FC<Props> = ({ movie: { Title, Poster }, onSelect }) => {
    const hasPoster = Poster !== 'N/A';
    const handleClick = () => {
        onSelect();
    };

    return (
        <Card>
            <Card.Header>
                {hasPoster ? <img src={Poster} alt={`${Title} poster`} /> : "Couldn't find a poster for this movie"}
            </Card.Header>
            <Card.Body>
                <h2>{Title}</h2>
                <Button onClick={handleClick}>Reviews</Button>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;