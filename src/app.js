import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpanses } from './actions/expanses';
import { firebase } from "./firebase/firebase";
import { login, logout } from './actions/auth';
import "./styles/app.scss";
import "./styles/loader.css";
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

const jsx = (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
)

const loader = (
    <div className="container-fluid h-min-100 h-max-100">
        <div className="row justify-content-center align-items-center h-min-100 h-max-100">
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    </div>
)

ReactDOM.render(loader, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user.providerData);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpanses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push("/dashboard");
            }
        })
    } else {
        store.dispatch(logout())
        renderApp();
        history.push("/");
    }
})

