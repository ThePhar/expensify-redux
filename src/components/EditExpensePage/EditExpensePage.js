import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../../actions/expenses";

export class EditExpensePage extends React.Component {
    onEdit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    };
    onRemove = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <h1 className="ma4">View/Edit An Expense</h1>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onEdit}
                />
                <button className="button remove" onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});
const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);