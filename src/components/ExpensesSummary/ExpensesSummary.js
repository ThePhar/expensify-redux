import numeral            from 'numeral';
import React              from 'react';
import { connect }        from 'react-redux';
import getExpensesTotal   from '../../selectors/getExpensesTotal';
import getVisibleExpenses from '../../selectors/getVisibleExpenses';

export const ExpensesSummary = (props) => (
    <p>
        Viewing {props.expenseCount}
        {
            props.expenseCount === 1 ? ' expense ' : ' expenses '
        }
        totalling {numeral(props.expenseTotal / 100).format('$0,0.00')}
    </p>
);

const mapStateToProps = (state) => ({
    expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
    expenseTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);