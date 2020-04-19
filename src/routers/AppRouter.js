import React from 'react';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ExpanseDashboard from '../components/ExpanseDashboard';
import AddExpanse from '../components/AddExpanse';
import EditExpanse from '../components/EditExpanse';
import AboutExpanse from '../components/AboutExpanse';
import SupportExpanse from '../components/SupportExpanse';
import NotFound from '../components/NotFound';
import MyNavbar from '../components/MyNavbar';
const AppRouter = () => (
    <BrowserRouter>
        <Container fluid className="p-0">
            <MyNavbar />
            <Switch>
                <Route path="/" component={ExpanseDashboard} exact={true} />
                <Route path="/create" component={AddExpanse} />
                <Route path='/edit/:id' component={EditExpanse} exact={true} />
                <Route path="/about" component={AboutExpanse} />
                <Route path="/support" component={SupportExpanse} />
                <Route component={NotFound} />
            </Switch>
        </Container>
    </BrowserRouter>
);
export default AppRouter;