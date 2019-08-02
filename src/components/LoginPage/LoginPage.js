import React         from 'react';
import { connect }   from 'react-redux';
import { startLogin} from '../../actions/auth';

import './LoginPage.scss';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify Redux</h1>
            <p>Let's get your expenses under control.</p>
            <button onClick={startLogin}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);