import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "../ExpenseListItem/ExpenseListItem";
import getVisibleExpenses from "../../selectors/getVisibleExpenses";

export const ExpenseList = (props) => (
    <table>
        <tbody>
        {
            props.expenses.length === 0 ? (
                <tr>No expenses found.</tr>
            ) : (
                props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense} />))
            )
        }
        </tbody>
    </table>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);