//Reducers
//Reducers are pure function
//Never change state or action
import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';
// ADD_EXPANSE
const addExpanse = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => (
    {
        type: 'ADD_EXPANSE',
        expanse: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }

);
// REMOVE_EXPANSE
const removeExpanse = ({ id = '' } = {}) => ({
    type: 'REMOVE_EXPANSE',
    id

});
// EDIT_EXPANSE
const editExpanse = (id, updates) => ({
    type: 'EDIT_EXPANSE',
    id,
    updates
});

// SET_FILTER_TEXT

const setFilterText = (text = '') => ({
    type: "SET_FILTER_TEXT",
    text
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
//SET_START_DATE
const setStartDate = (date) => ({
    type: "SET_START_DATE",
    date
});
//SET_END_DATE

const setEndDate = (date) => ({
    type: "SET_END_DATE",
    date
});


//Expanses Reducer
const expansesReducerDefaultState = [];

const expansesReducer = ((state = expansesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPANSE':
            return [
                ...state,
                action.expanse
            ];
        case 'REMOVE_EXPANSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPANSE':
            return state.map((expanse) => ({
                ...expanse,
                ...action.updates
            }));
        default:
            return state;
    }
});

//filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = ((state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            };
        default:
            return state;
    }
});

//get visible expanses

const getVisibleExpanses = (expanses, { text, sortBy, startDate, endDate }) => {
    return expanses.filter((expanse) => {
        const startDateMatch = typeof startDate !== 'number' || expanse.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expanse.createdAt <= endDate;
        const textMatch = expanse.description.toLowerCase().includes(text.toLowerCase());
        // const textMatch = text.toLowerCase() === expanse.description.toLowerCase();
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            console.log(a, b);
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

//store creation
const store = createStore(
    combineReducers({
        expanses: expansesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpanses = getVisibleExpanses(state.expanses, state.filters);
    console.log("visibleExpanses : ", visibleExpanses);
});

// const settedFilterTextTwo = store.dispatch(setFilterText());
// console.log("settedFilterTextTwo : ", settedFilterTextTwo);

const sortedByDate = store.dispatch(sortByDate());
// console.log("sortedByDate : ", sortedByDate);

// const sortedByAmount = store.dispatch(sortByAmount());
// console.log("sortedByAmount : ", sortedByAmount);

// const settedStatrtDate = store.dispatch(setStartDate(0));
// console.log("settedStartDate : ", settedStatrtDate);

// const settedEndDate = store.dispatch(setEndDate(321));
// console.log("settedEndDate : ", settedEndDate);

const expanseOne = store.dispatch(addExpanse(
    {
        description: 'Rent',
        note: "This will be the last payment for this address",
        amount: 2500,
        createdAt: -2000
    }
));
// console.log("expanseOne : ", expanseOne);

const expanseTwo = store.dispatch(addExpanse(
    {
        description: 'Coffee',
        note: "Cost of amazing time spent with shakira",
        amount: 200,
        createdAt: 1000
    }
));
// console.log("expanseTwo : ", expanseTwo);

const expanseThree = store.dispatch(addExpanse(
    {
        description: 'Internet',
        note: "Cost of data",
        amount: 555,
        createdAt: 500
    }
));
// console.log("expanseThree : ", expanseThree);

// const removedExpanse = store.dispatch(removeExpanse({
//     id: expanseOne.expanse.id
// }));
// console.log("removedExpanse : ", removedExpanse);

// const editedExpanse = store.dispatch((editExpanse(
//     expanseTwo.expanse.id, {
//     amount: 500
// })));
// console.log("editedExpanse : ", editedExpanse);

// const settedFilterTextOne = store.dispatch(setFilterText('cOFFee'));
// console.log("settedFilterTextOne : ", settedFilterTextOne);



const demoState = {
    expanses: [{
        id: "poiuytrew",
        description: "January Rent",
        note: "this is the last payment for that address",
        createdAt: 0
    }],
    filters: {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
}
