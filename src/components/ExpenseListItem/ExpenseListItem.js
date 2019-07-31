import moment   from 'moment';
import numeral  from 'numeral';
import React    from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <tr style={{ border: '1px solid black' }}>
        <td style={{ border: '1px solid black' }}>
            <Link to={`/edit/${id}`}>{description}</Link>
        </td>
        <td style={{ border: '1px solid black' }}>{numeral(amount / 100).format('$0,0.00')}</td>
        <td style={{ border: '1px solid black' }}>{moment(createdAt).format('MMM Do, YYYY')}</td>
    </tr>
);

export default ExpenseListItem;