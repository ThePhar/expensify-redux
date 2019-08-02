import React           from 'react';
import { connect }     from 'react-redux';
import { Link }        from 'react-router-dom';
import { startLogout } from '../../actions/auth';

import './Header.scss';

export const Header = ({ startLogout }) => (
    <header className="header">
        <Link className="header__title" to="/dashboard">
            <h1>Expensify</h1>
        </Link>
        <button className="header__button" onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);