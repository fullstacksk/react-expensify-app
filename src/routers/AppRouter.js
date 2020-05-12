import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Container from 'react-bootstrap/Container';
import ExpanseDashboard from '../components/ExpanseDashboard';
import AddExpanse from '../components/AddExpanse';
import EditExpanse from '../components/EditExpanse';
import AboutExpanse from '../components/AboutExpanse';
import SupportExpanse from '../components/SupportExpanse';
import NotFound from '../components/NotFound';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
export const history = createBrowserHistory();
const AppRouter = () => (
    <Router history={history}>
        <Container fluid className="p-0">
            <Switch>
                <Route path="/" component={Login} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpanseDashboard} exact={true} />
                <PrivateRoute path="/create" component={AddExpanse} />
                <PrivateRoute path='/edit/:id' component={EditExpanse} exact={true} />
                <Route path="/about" component={AboutExpanse} />
                <Route path="/support" component={SupportExpanse} />
                <Route component={NotFound} />
            </Switch>
        </Container>
    </Router>
);
export default AppRouter;