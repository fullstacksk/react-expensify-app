import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpanse } from './actions/expanses';
import moment from 'moment';
import "./firebase/firebase";
import "./styles/app.scss";
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const expanseOne = store.dispatch(addExpanse(
    {
        description: 'Electricity Bill',
        note: "This will be the last payment for this address",
        amount: 2500,
        createdAt: moment()
    }
));

const expanseTwo = store.dispatch(addExpanse(
    {
        description: 'Gas Bill',
        note: "Cost of amazing time spent with shakira",
        amount: 200,
        createdAt: moment()
    }
));

const expanseThree = store.dispatch(addExpanse(
    {
        description: 'Water Bill',
        note: "Cost of data",
        amount: 555,
        createdAt: moment()
    }
));

const jsx = (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
)
ReactDOM.render(jsx, document.getElementById('app')); 