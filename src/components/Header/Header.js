import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav className="nav">
            <Link className="nav__link" to="/">Home</Link>
            <Link className="nav__link" to="/create">Create New Expense</Link>
            <Link className="nav__link" to="/edit">Edit Expenses</Link>
            <Link className="nav__link" to="/help">Help</Link>
        </nav>
    </header>
);

export default Header;