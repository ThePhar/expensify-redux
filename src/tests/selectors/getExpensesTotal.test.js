import getExpensesTotal from '../../selectors/getExpensesTotal';
import expenses         from '../fixtures/expenses';

test('Should return 0 if no expenses.', () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test('Should return added amount of a single expense.', () => {
    const total = getExpensesTotal([expenses[1]]);
    expect(total).toBe(expenses[1].amount);
});

test('Should return added amount of multiple expenses.', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});