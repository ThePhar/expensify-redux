import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount } from "./actions/filters";

import "normalize-css/normalize.css";
import "./index.scss";

const store = configureStore();

// TODO: Remove dummy data.
store.dispatch(addExpense({ description: "Rent", amount: 85000 }));
store.dispatch(addExpense({ description: "Water bill", amount: 3000, createdAt: 1000 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 15000, createdAt: -1000 }));
store.dispatch(setTextFilter("bill"));

// TODO: Remove timeout to check filter works.
setTimeout(() => {
    store.dispatch(sortByAmount())
}, 3000);

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
