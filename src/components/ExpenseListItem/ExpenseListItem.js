import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../../actions/expenses";

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
    <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black" }}>{description}</td>
        <td style={{ border: "1px solid black" }}>{amount}</td>
        <td style={{ border: "1px solid black" }}>{createdAt}</td>
        <td><button onClick={() => {
            dispatch(removeExpense(id));
        }}>Remove</button></td>
    </tr>
);

export default connect()(ExpenseListItem);