import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';
import { Movie } from '../../types';

const movie: Movie = { _id: '1', title: 'A Movie Title', _ts: '', reviews: []};

describe('<MovieCard />', () => {
    test('renders correctly', () => {
        const wrapper = shallow(<MovieCard movie={movie} />);

        expect(wrapper.text()).toContain(movie.title);
    });
});