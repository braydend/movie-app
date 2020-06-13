import React from 'react';
import { shallow } from 'enzyme';
import ReviewModal from '.';
import { Movie } from '../../utils/MovieApiProvider';

describe('<ReviewModal />', () => {
    const shrek: Movie = {
        imdbID: 'saddfghkl',
        Poster: 'img-url',
        Title: 'Shrek',
        Type: "movie",
        Year: '2000',
    };
    
    test('renders without error', () => {
        const wrapper = shallow(<ReviewModal movie={shrek} onClose={() => {}} />);

        expect(wrapper.length).toBe(1);
    });

    test('renders movie data correctly', () => {
        const wrapper = shallow(<ReviewModal movie={shrek} onClose={() => {}} />);
        const posterImage = wrapper.find('Image');

        expect(wrapper.text()).toContain(shrek.Title);
        expect(posterImage.prop('src')).toBe(shrek.Poster);
    });
});