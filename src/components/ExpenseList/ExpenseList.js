import React              from 'react';
import { connect }        from 'react-redux';
import getVisibleExpenses from '../../selectors/getVisibleExpenses';
import ExpenseListItem    from '../ExpenseListItem/ExpenseListItem';

export const ExpenseList = (props) => (
    <div className="pa4">
        <div className="overflow-auto">
            <table className="f3 w-100 center" cellSpacing="0">
                <thead>
                <tr className="stripe-dark">
                    <th className="fw6 tl pa3 bg-white">Description</th>
                    <th className="fw6 tl pa3 bg-white">Date</th>
                    <th className="fw6 tl pa3 bg-white">Amount</th>
                </tr>
                </thead>
                <tbody className="lh-copy">
                    { props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />) }
                </tbody>
            </table>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);