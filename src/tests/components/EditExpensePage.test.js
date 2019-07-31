import { shallow }         from 'enzyme';
import React               from 'react';
import { EditExpensePage } from '../../components/EditExpensePage/EditExpensePage';
import ExpenseForm         from '../../components/ExpenseForm/ExpenseForm';
import expenses            from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;
beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        expense={expenses[0]}
    />);
});

test('Should render EditExpensePage correctly.', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onEdit', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('Should handle onRemove', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
});