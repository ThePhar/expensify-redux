import { shallow }        from 'enzyme';
import React              from 'react';
import { AddExpensePage } from '../../components/AddExpensePage/AddExpensePage';
import ExpenseForm        from '../../components/ExpenseForm/ExpenseForm';
import expenses           from '../fixtures/expenses';

let startAddExpense, history, wrapper;
beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('Should render AddExpensePage correctly.', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});