import React              from 'react';
import { connect }        from 'react-redux';
import getVisibleExpenses from '../../selectors/getVisibleExpenses';
import ExpenseListItem    from '../ExpenseListItem/ExpenseListItem';

export const ExpenseList = (props) => (
    <table>
        <tbody>
        {
            props.expenses.length === 0 ? (
                <tr><td>No expenses found.</td></tr>
            ) : (
                props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense} />))
            )
        }
        </tbody>
    </table>
);

const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);