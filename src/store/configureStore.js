import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expansesReducer from '../reducers/expanses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const createCommposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store creation
export default () => {
    const store = createStore(
        combineReducers({
            expanses: expansesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        createCommposer(applyMiddleware(thunk))
    )
    return store;
};
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

