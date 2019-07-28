import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black" }}>
            <Link to={`/edit/${id}`}>{description}</Link>
        </td>
        <td style={{ border: "1px solid black" }}>{amount}</td>
        <td style={{ border: "1px solid black" }}>{createdAt}</td>
    </tr>
);

export default ExpenseListItem;