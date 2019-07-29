import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import "normalize-css/normalize.css";
import "./index.scss";

const store = configureStore();

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
