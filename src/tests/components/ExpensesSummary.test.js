import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary/ExpensesSummary";
import expenses from "../fixtures/expenses";
import getVisibleExpenses from "../../selectors/getVisibleExpenses";
import getExpensesTotal from "../../selectors/getExpensesTotal";
import { filters } from "../fixtures/filters";

let wrapper, expenseCount, expenseTotal;
beforeEach(() => {
    expenseCount = getVisibleExpenses(expenses, filters).length;
    expenseTotal = getExpensesTotal(getVisibleExpenses(expenses, filters));
    wrapper = shallow(
        <ExpensesSummary
            expenseCount={expenseCount}
            expenseTotal={expenseTotal}
        />
    );
});

test("Should render summary of a single expense with singular noun.", () => {
    const singleExpenseList = [expenses[1]];
    wrapper.setProps({
        expenseCount: getVisibleExpenses(singleExpenseList, filters).length,
        expenseTotal: getExpensesTotal(getVisibleExpenses(singleExpenseList, filters))
    });
    expect(wrapper.html()).toContain("Viewing 1 expense totalling $1,095.00");
    expect(wrapper).toMatchSnapshot();
});

test("Should render summary of multiple expenses with plural noun.", () => {
    expect(wrapper.html()).toContain("Viewing 3 expenses totalling $1,141.95");
    expect(wrapper).toMatchSnapshot();
});