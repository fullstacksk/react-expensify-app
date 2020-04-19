import React from 'react';
import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';

//ADD_TODO
const addTodo = ({ task_name = '', description = '', createdAt = 0 } = {}) => ({
    type: "ADD_TODO",
    todo: {
        id: uuid(),
        task_name,
        description,
        createdAt
    }
}
);
//REMOVE_TODO
//EDIT_TODO
//SET_FILTER_TEXT
const setFilterText = (text) => ({
    type: "SET_FILTER_TEXT",
    text
});
//SORT_BY_TEXT
const sortByText = () => ({
    type: "SORT_BY_TEXT",
    sortBy: "text"
});
//SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE",
    sortBy: "date"
});
//SET_START_DATE
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});
//SET_END_DATE
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});


const todosReducerDefaultState = [];
const todosReducer = ((state = todosReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ];
        default:
            return state;
    }
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDtae: undefined,
    endDate: undefined
}
const filtersReducer = ((state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_FILTER_TEXT":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_TEXT":
            return {
                ...state,
                sortBy: action.sortBy
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: action.sortBy
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
});

const store = createStore(
    combineReducers({
        todos: todosReducer,
        filters: filtersReducer
    })
)

const getVisibleTodos = (todos, { text, sortBy, endDate, startDate }) => {
    return todos.filter((todo) => {
        const startDateMatch = typeof statrtDate !== 'number' || todo.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || todo.endDate <= endDate;
        const textMatch = todo.task_name.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
    })
}

store.subscribe(() => {
    const state = store.getState();
    const visibleTodos = getVisibleTodos(state.todos, state.filters)
    console.log(visibleTodos);
})

store.dispatch(addTodo({
    task_name: "Take A Bath",
    description: "Use Dettol Soap",
    createdAt: 100
}));
store.dispatch(addTodo({
    task_name: "Let's Lunch",
    description: "Thier is Chicken-Biryani",
    createdAt: 200
}));
store.dispatch(addTodo({
    task_name: "Take Breakfast!",
    description: "There is aaloo-poori!",
    createdAt: 300
}));
// store.dispatch(setFilterText('breakfast'));
store.dispatch(sortByDate());



const demoState = {
    todos: [{
        id: "poiuytrew",
        task_name: "Pay January Rent",
        description: "this is the last payment for that address",
        createdAt: 0
    }],
    filters: {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    }
}