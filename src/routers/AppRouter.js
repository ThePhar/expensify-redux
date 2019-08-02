import { createBrowserHistory }  from 'history';
import React                     from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import AddExpensePage            from '../components/AddExpensePage/AddExpensePage';
import DashboardPage             from '../components/DashboardPage/DashboardPage';
import EditExpensePage           from '../components/EditExpensePage/EditExpensePage';
import LoginPage                 from '../components/LoginPage/LoginPage';
import NotFoundPage              from '../components/NotFoundPage/NotFoundPage';
import PrivateRoute              from './PrivateRoute';
import PublicRoute               from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;