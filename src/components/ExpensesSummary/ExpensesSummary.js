import numeral            from 'numeral';
import React              from 'react';
import { connect }        from 'react-redux';
import getExpensesTotal   from '../../selectors/getExpensesTotal';
import getVisibleExpenses from '../../selectors/getVisibleExpenses';

export const ExpensesSummary = (props) => {
    const pluralized = props.expenseCount === 1 ? 'expense' : 'expenses';
    const numberOfExpenses = props.expenseCount;
    const totalAmount = numeral(props.expenseTotal / 100).format('$0,0.00');

    return (
        <div className="ma3 br3 flex items-center justify-center pa4 bg-lightest-blue navy">
            <svg className="w1" data-icon="info" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}>
                <title>info icon</title>
                <path
                    d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6" />
            </svg>
            <span className="lh-title ml3">Viewing {numberOfExpenses} {pluralized} totalling {totalAmount}</span>
        </div>
    );
};


// {/*<p>*/ }
// {/*    Viewing {props.expenseCount}*/}
// {/*    {*/}
// {/*        props.expenseCount === 1 ? ' expense ' : ' expenses '*/}
// {/*    }*/}
// {/*    totalling {numeral(props.expenseTotal / 100).format('$0,0.00')}*/}
// {/*</p>*/}

const mapStateToProps = (state) => ({
    expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
    expenseTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);