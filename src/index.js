import React                from 'react';
import ReactDOM             from 'react-dom';
import { Provider }         from 'react-redux';
import { startSetExpenses } from './actions/expenses';
import AppRouter            from './routers/AppRouter';
import configureStore       from './store/configureStore';

import 'normalize-css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './index.scss';

import 'react-dates/initialize';
import './firebase/firebase';

const store = configureStore();

const app = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses())
    .then(() => {
        ReactDOM.render(app, document.getElementById('root'));
    });