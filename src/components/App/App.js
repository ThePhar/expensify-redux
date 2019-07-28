import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

// TODO: Dummy components for testing React-Router. Move to separate folders/files for each component.
const DashboardPage = () => ( <div>This is from my dashboard component.</div> );
const AddExpensePage = () => ( <div>This is from my add expense component.</div> );
const EditExpensePage = () => ( <div>This is from my edit expense component.</div> );
const HelpPage = () => ( <div>This is from my help component.</div> );

const App = () => (
    <BrowserRouter>
        <Fragment>
            <Route path="/" component={DashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </Fragment>
    </BrowserRouter>
);

export default App;
