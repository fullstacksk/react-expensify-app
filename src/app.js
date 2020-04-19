import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpanse } from './actions/expanses';
import moment from 'moment';
import "./styles/app.scss";


const store = configureStore();

const expanseOne = store.dispatch(addExpanse(
    {
        description: 'Electricity Bill',
        note: "This will be the last payment for this address",
        amount: 2500,
        createdAt: moment()
    }
));
// console.log("expanseOne : ", expanseOne);

const expanseTwo = store.dispatch(addExpanse(
    {
        description: 'Gas Bill',
        note: "Cost of amazing time spent with shakira",
        amount: 200,
        createdAt: moment()
    }
));
// console.log("expanseTwo : ", expanseTwo);

const expanseThree = store.dispatch(addExpanse(
    {
        description: 'Water Bill',
        note: "Cost of data",
        amount: 555,
        createdAt: moment()
    }
));
// console.log("expanseThree : ", expanseThree);

// setTimeout(() => {
//     store.dispatch(setFilterText('water'));
// }, 3000)
// const settedFilterTextTwo = store.dispatch(setFilterText('water'));
// console.log("settedFilterTextTwo : ", settedFilterTextTwo);
// const state = store.getState();
// const visibleExpanses = getVisibleExpanses(state.expanses, state.filters);
// console.log(visibleExpanses);
const jsx = (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
)
ReactDOM.render(jsx, document.getElementById('app')); 