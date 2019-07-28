import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "../ExpenseListItem/ExpenseListItem";
import getVisibleExpenses from "../../selectors/getVisibleExpenses";

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <table><tbody>
        {
            props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense} />))
        }
        </tbody></table>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);