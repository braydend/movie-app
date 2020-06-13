import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';
import { Movie } from '../../utils/MovieApiProvider';

const shrek: Movie = {
    imdbID: 'saddfghkl',
    Poster: 'img-url',
    Title: 'Shrek',
    Type: "movie",
    Year: '2000',
};

describe('<MovieCard />', () => {
    test('renders correctly', () => {
        const wrapper = shallow(<MovieCard movie={shrek} />);

        expect(wrapper.text()).toContain('Shrek');
    });
});