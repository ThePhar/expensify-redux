import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk                                                      from 'redux-thunk';
import expensesReducer                                            from '../reducers/expenses';
import filtersReducer                                             from '../reducers/filters';

// noinspection JSUnresolvedVariable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => (
    createStore(combineReducers(
        { expenses: expensesReducer, filters: filtersReducer }),
        composeEnhancers(applyMiddleware(thunk))
    )
);