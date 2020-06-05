import React from 'react';
import { shallow } from 'enzyme';
import Searchbar from './Searchbar';

describe('<Searchbar />', () => {
    test('renders correctly', () => {
        const wrapper = shallow(<Searchbar query='' onChange={() => {}} />);
        const label = wrapper.find('label');
        const input = wrapper.find('Input');

        expect(label.length).toBe(1);
        expect(input.length).toBe(1);
    });

    test('renders query prop in Input', () => {
        const wrapper = shallow(<Searchbar query='foo' onChange={() => {}} />);
        const input = wrapper.find('Input');
        const expected = 'foo';

        expect(input.props().value).toBe(expected);
    });

    test('onChange callback is fired when query is updated', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Searchbar query={''} onChange={callback} />);
        const input = wrapper.find('Input');
    
        input.simulate('change', { target: { value: 'first Search'}});
        input.simulate('change', { target: { value: 'second Search'}});

        expect(callback.mock.calls.length).toBe(2);
    })
});