import React from "react";

const ExpenseListItem = ({ description, amount, createdAt }) => (
    <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black" }}>{description}</td>
        <td style={{ border: "1px solid black" }}>{amount}</td>
        <td style={{ border: "1px solid black" }}>{createdAt}</td>
    </tr>
);

export default ExpenseListItem;