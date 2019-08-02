import moment   from 'moment';
import numeral  from 'numeral';
import React    from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    const formattedAmount = numeral(amount / 100).format('$0,0.00');
    const formattedDate = moment(createdAt).format('MMM Do, YYYY');

    return (
        <tr className="stripe-dark">
            <td className="pa3">
                <Link className="b db blue no-underline underline-hover" to={`/edit/${id}`}>
                    { description }
                </Link>
            </td>
            <td className="pa3">{ formattedDate }</td>
            <td className="pa3">{ formattedAmount }</td>
        </tr>
    )
};

export default ExpenseListItem;