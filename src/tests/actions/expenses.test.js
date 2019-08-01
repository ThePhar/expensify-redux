import configureMockStore from 'redux-mock-store';
import thunk              from 'redux-thunk';
import {
    addExpense, editExpense, removeExpense, setExpenses, startAddExpense, startEditExpense, startRemoveExpense,
    startSetExpenses
} from '../../actions/expenses';
import database           from '../../firebase/firebase';
import expenses           from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach((expense) => {
        const { description, id, note, amount, createdAt } = expense;
        expensesData[id] = { description, note, amount, createdAt };
    });

    database.ref('expenses').set(expensesData).then(() => done());
});

test('Should setup remove expense action object.', () => {
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object.', () => {
    const action = editExpense('123abc', { note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    });
});

test('Should setup set expenses action object.', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('Should setup add expense action object with provided values.', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better!',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });

            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const defaultExpenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...defaultExpenseData
                }
            });

            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(defaultExpenseData);
            done();
        });
});

test('Should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses
            });

            done();
        });
});

test('Should remove the expense from firebase', (done) => {
    const store = createMockStore(expenses);
    store.dispatch(startRemoveExpense(expenses[2].id))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id: expenses[2].id
            });

            return database.ref('expenses').once('value');
        })
        .then((snapshot) => {
            const parsedExpenses = [];
            snapshot.forEach((childSnapshot) => {
                parsedExpenses.push({ id: childSnapshot.key, ...childSnapshot.val() });
            });
            expect(parsedExpenses).toEqual([expenses[0], expenses[1]]);
            done();
        });
});

test('Should edit the expense in firebase', (done) => {
    const store = createMockStore(expenses);
    const updatedExpense = {
        amount: 90000,
        description: expenses[1].description,
        note: 'Changed rent to new amount',
        createdAt: expenses[1].createdAt
    };

    store.dispatch(startEditExpense(expenses[1].id, updatedExpense))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id: expenses[1].id,
                updates: updatedExpense
            });

            return database.ref(`expenses/${expenses[1].id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(updatedExpense);
            done();
        });
});