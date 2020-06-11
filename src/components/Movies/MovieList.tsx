import React, { useState } from 'react';
import Searchbar from '../Searchbar';
import { Movie } from '../../types';
import { containsSubstring } from '../../utils/StringUtils';
import MovieCard from './MovieCard';
import { Row, Col, CardColumns, Button } from 'react-bootstrap';

type Props = {
    movies: Movie[];
};

const MovieList: React.FC<Props> = ({ movies }) => {
    const [query, setQuery] = useState('');

    const moviesToDisplay = movies.filter(({ title }) => containsSubstring(query, title));
    const noResults = moviesToDisplay.length === 0;

    const handleAddMovie = () => {
        // movies.push({ id: (movies.length + 1), title: query });
        setQuery('');
    };

    return (
        <>
            <Searchbar query={query} onChange={(newQuery) => setQuery(newQuery)} />
            <strong>List of movies</strong>
                {noResults ? (
                    <Row>
                        <Col>
                            <strong>This movie isn't in the list</strong>
                            <Button onClick={handleAddMovie}>Add movie to list</Button>
                        </Col>
                    </Row>
                 ) : (
                        <CardColumns>
                            { moviesToDisplay.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
                        </CardColumns>
                 )}
        </>
    );
};

export default MovieList;