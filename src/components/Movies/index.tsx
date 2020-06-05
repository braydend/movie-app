import React, { useState } from 'react';
import MovieList from './MovieList';
import { GET_ALL_MOVIES } from './queries';
import { useQuery } from '@apollo/react-hooks';
import Card from '../../styled-components/Card';
import Searchbar from '../Searchbar';
import styled from 'styled-components';
import { containsSubstring } from '../../utils/StringUtils';
import { Movie } from '../../types';

const Movies: React.FC = () => {
    const [query, setQuery] = useState('');
    const { data, loading, error } = useQuery(GET_ALL_MOVIES); 

    if (loading) return <Card>Loading...</Card>
    if (error) return <Card variant='red'>Something went wrong!</Card>

    const MovieContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

    const movies: Movie[] = data.findAllMovies.data;

    const filteredMovies = movies.filter(movie => containsSubstring(query, movie.title));

    const handleAddMovie = () => {
        // This is a stub for now, need to create mutation and all that biz
        setQuery('');
    };

    const noResults = filteredMovies.length === 0;

    return (
        <div>
        <Searchbar query={query} onChange={(newQuery) => setQuery(newQuery)} />
        <strong>List of movies</strong>
        <MovieContainer id='movies'>
            {noResults ? 
                <div>
                    <strong>This movie isn't in the list</strong>
                    <button onClick={handleAddMovie}>Add movie to list</button>
                </div>
             :
                <MovieList movies={filteredMovies} />
            }
        </MovieContainer>
    </div>
    );

};

export default Movies;
