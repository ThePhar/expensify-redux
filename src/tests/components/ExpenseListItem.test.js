import { shallow }     from 'enzyme';
import React           from 'react';
import ExpenseListItem from '../../components/ExpenseListItem/ExpenseListItem';
import expenses        from '../fixtures/expenses';

test('Should render ExpenseListItem.', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});