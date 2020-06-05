import React, { useState } from 'react';
import styled from 'styled-components';
import Searchbar from '../Searchbar';
import { Movie } from '../../types';
import { containsSubstring } from '../../utils/StringUtils';
import MovieCard from './MovieCard';

type Props = {
    movies: Movie[];
};

const MovieContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const MovieList: React.FC<Props> = ({ movies }) => {
    const [query, setQuery] = useState('');

    const moviesToDisplay = movies.filter((movie) => {
        console.log(movie);
        return containsSubstring(query, movie.title)
    });
    const noResults = moviesToDisplay.length === 0;

    const handleAddMovie = () => {
        // movies.push({ id: (movies.length + 1), title: query });
        setQuery('');
    };

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
                    moviesToDisplay.map((movie) => <MovieCard key={movie._id} movie={movie} />)
                }
            </MovieContainer>
        </div>
    );
};

export default MovieList;