import React           from 'react';
import { connect }     from 'react-redux';
import { NavLink }     from 'react-router-dom';
import { startLogout } from '../../actions/auth';

import './Header.scss';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <nav className="nav">
            <NavLink className="nav__link" activeClassName="nav__link--active" to="/dashboard" exact>Dashboard</NavLink>
            <NavLink className="nav__link" activeClassName="nav__link--active" to="/create">Create New Expense</NavLink>
            <button onClick={startLogout}>Logout</button>
        </nav>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);