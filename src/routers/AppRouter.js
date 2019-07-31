import React                            from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage                   from '../components/AddExpensePage/AddExpensePage';
import DashboardPage                    from '../components/DashboardPage/DashboardPage';
import EditExpensePage                  from '../components/EditExpensePage/EditExpensePage';
import Header                           from '../components/Header/Header';
import HelpPage                         from '../components/HelpPage/HelpPage';
import NotFoundPage                     from '../components/NotFoundPage/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </>
    </BrowserRouter>
);

export default AppRouter;