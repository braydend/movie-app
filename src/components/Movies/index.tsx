import React from 'react';
import MovieList from './MovieList';
import { GET_ALL_MOVIES } from './queries';
import { useQuery } from '@apollo/react-hooks';
import { Card } from 'react-bootstrap';

const Movies: React.FC = () => {
    const { data, loading, error } = useQuery(GET_ALL_MOVIES); 

    if (loading) return <Card><Card.Body>Loading...</Card.Body></Card>
    if (error) return <Card bg='danger'><Card.Body>Something went wrong!</Card.Body></Card>

    const { findAllMovies: { data: movies } } = data;
    return <MovieList movies={movies} />;

};

export default Movies;