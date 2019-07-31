import { shallow }     from 'enzyme';
import React           from 'react';
import DashboardPage   from '../../components/DashboardPage/DashboardPage';
import ExpensesSummary from '../../components/ExpensesSummary/ExpensesSummary';

test('Should render DashboardPage.', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});

test('Should have ExpensesSummary component present.', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper.contains(<ExpensesSummary />)).toBe(true);
});