import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test('Should set default state.', () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});
test('Should remove expense by id.', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});
test('Should not remove expenses if id not found.', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});
test('Should add expense', () => {
    const expense = {
        description: "Coffee",
        note: "",
        amount: 495,
        createdAt: 0,
        id: "4"
    };
    const action = {
        type: "ADD_EXPENSE",
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});
test('Should edit an expense', () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: { description: "Mortgage" }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe("Mortgage");
});
test('Should not edit expense if expense not found', () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: { description: "Mortgage" }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});