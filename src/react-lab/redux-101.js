import { createStore } from 'redux';
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ setTo = 101 } = {}) => ({
    type: 'SET',
    setTo
});

const resetCount = ({ resetTo = 0 } = {}) => ({
    type: 'RESET',
    resetTo
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: state.count = action.resetTo
            };
        case 'SET':
            return {
                count: action.setTo
            };
        default:
            return state;
    }
});

// this.setState((prevState)=>{
//     return prevState;
// })
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 1000 }));
store.dispatch(resetCount({ resetTo: 111 }));
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ setTo: 11111 }))