import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpanse, startSetExpanses } from './actions/expanses';
import moment from 'moment';
import "./firebase/firebase";
import "./styles/app.scss";
import "./styles/loader.css";
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
)

const loader = (
    <div className="container-fluid h-min-100 h-max-100 border">
        <div className="row justify-content-center align-items-center h-min-100 h-max-100">
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    </div>
)

ReactDOM.render(loader, document.getElementById('app'));
store.dispatch(startSetExpanses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})