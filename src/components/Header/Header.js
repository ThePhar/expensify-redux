import React       from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav className="nav">
            <NavLink className="nav__link" activeClassName="nav__link--active" to="/" exact>Home</NavLink>
            <NavLink className="nav__link" activeClassName="nav__link--active" to="/create">Create New Expense</NavLink>
            {/*<NavLink className="nav__link" activeClassName="nav__link--active" to="/help">Help</NavLink>*/}
        </nav>
    </header>
);

export default Header;