import React from 'react';
import { shallow } from 'enzyme';
import NewReviewModal from './NewReviewModal';


describe('<NewReviewModal />', () => {
    test('renders without error', () => {
        const wrapper = shallow(<NewReviewModal rating={1} movie_id="1" onClose={() => {}} />);
        
        expect(wrapper.length).toBe(1);
    });

    test('shows correct rating', () => {
        const test = (rating: number) => {
            const wrapper = shallow(<NewReviewModal rating={rating} movie_id="1" onClose={() => {}} />);
            const stars = wrapper.find('ReactStars');

            expect(stars.prop('value')).toBe(rating);
        }

        // Test each valid rating
        [1,2,3,4,5].forEach(test);
    });

    test('onClose is called on review save', () => {
        const mockCallback = jest.fn();
        const wrapper = shallow(<NewReviewModal onClose={mockCallback} rating={1} movie_id="1" />);
        const saveButton = wrapper.find('Button');

        expect(mockCallback).toHaveBeenCalledTimes(0);
        saveButton.simulate('click');
        expect(mockCallback).toHaveBeenCalledTimes(1);
    });
});
