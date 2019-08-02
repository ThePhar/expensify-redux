import { shallow } from 'enzyme';
import React       from 'react';
import { Header }  from '../../components/Header/Header';

let startLogout, wrapper;
beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />)
});

test('Should render Header correctly.', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout when clicked.', () => {
     wrapper.find('button').simulate('click');
     expect(startLogout).toHaveBeenCalled();
});