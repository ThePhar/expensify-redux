import { shallow }   from 'enzyme';
import React         from 'react';
import { LoginPage } from '../../components/LoginPage/LoginPage';

let startLogin, wrapper;
beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin} />)
});

test('Should render LoginPage.', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin when clicked.', () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});