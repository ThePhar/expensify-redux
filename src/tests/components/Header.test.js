import { shallow } from 'enzyme';
import React       from 'react';
import Header      from '../../components/Header/Header';

test('Should render Header correctly.', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});