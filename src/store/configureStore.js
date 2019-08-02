import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk                                                      from 'redux-thunk';
import authReducer                                                from '../reducers/auth';
import expensesReducer                                            from '../reducers/expenses';
import filtersReducer                                             from '../reducers/filters';

// noinspection JSUnresolvedVariable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => (
    createStore(combineReducers(
        {
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
);