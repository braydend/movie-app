import React from 'react';
import { shallow, mount } from 'enzyme';
import { Movie } from '../../types';
import MovieList from './MovieList';

const movies: Movie[] = [
    { _id: '1', title: 'Harry Potter', _ts: '', reviews: [] }, 
    { _id: '2', title: 'Star Wars', _ts: '', reviews: [] },
    { _id: '3', title: 'The Big Lebowski', _ts: '', reviews: [] },
    { _id: '4', title: 'Avengers', _ts: '', reviews: [] },
];

describe('<MovieList />', () => {
    test('renders list of movies', () => {
        const wrapper = mount(<MovieList movies={movies} />);
        const movieList = wrapper.find('MovieCard');

        expect(movieList.children().length).toBe(movies.length);
    });

    test('renders message when no movies in list', () => {
        const wrapper = shallow(<MovieList movies={[]} />);
        
        expect(wrapper.text()).toContain('Add movie');
    });
});