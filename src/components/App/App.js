import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Header from "../Header/Header";

import "./App.scss";

// TODO: Dummy components for testing React-Router. Move to separate folders/files for each component.
const DashboardPage = () => ( <div>This is from my dashboard component.</div> );
const AddExpensePage = () => ( <div>This is from my add expense component.</div> );
const EditExpensePage = () => ( <div>This is from my edit expense component.</div> );
const HelpPage = () => ( <div>This is from my help component.</div> );
const NotFoundPage = () => ( <div>404 - <Link to="/">Go Home</Link></div> );

const App = () => (
    <BrowserRouter>
        <>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </>
    </BrowserRouter>
);

export default App;
