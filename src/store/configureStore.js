import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expansesReducer from '../reducers/expanses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const createCommposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

//store creation
export default () => {
    const store = createStore(
        combineReducers({
            expanses: expansesReducer,
            filters: filtersReducer
        }),
        createCommposer(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
};

