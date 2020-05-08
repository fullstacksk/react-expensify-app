
//Expanses Reducer
const expansesReducerDefaultState = [];

export default ((state = expansesReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_EXPANSES":
            return action.expanses
        case 'ADD_EXPANSE':
            return [
                ...state,
                action.expanse
            ];
        case 'REMOVE_EXPANSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPANSE':
            return state.map((expanse) => {
                if (expanse.id === action.id)
                    return {
                        ...expanse,
                        ...action.updates
                    }
                return expanse;
            });
        default:
            return state;
    }
});
