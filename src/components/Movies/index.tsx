import React from 'react';
import MovieList from './MovieList';
import { GET_ALL_MOVIES } from './queries';
import { useQuery } from '@apollo/react-hooks';
import Card from '../../styled-components/Card';

const Movies: React.FC = () => {
    const { data, loading, error } = useQuery(GET_ALL_MOVIES); 

    if (loading) return <Card>Loading...</Card>
    if (error) return <Card variant='red'>Something went wrong!</Card>

    const { findAllMovies: { data: movies } } = data;
    return <MovieList movies={movies} />;

};

export default Movies;