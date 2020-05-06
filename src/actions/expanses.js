
import { v4 as uuid } from 'uuid';
import database from '../firebase/firebase';
// ADD_EXPANSE
export const addExpanse = (expanse) => (
    {
        type: 'ADD_EXPANSE',
        expanse
    }
);
export const startAddExpanse = (expanseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expanseData;
        const expanse = { description, note, amount, createdAt };
        return database.ref('expanses')
            .push(expanse)
            .then((ref) => {
                dispatch(addExpanse({
                    id: ref.key,
                    ...expanse
                }))
            })
            .catch((e) => {
                console.log("Add Expanse Failed", e)
            })
    }
}

// REMOVE_EXPANSE
export const removeExpanse = ({ id = '' } = {}) => ({
    type: 'REMOVE_EXPANSE',
    id

});
// EDIT_EXPANSE
export const editExpanse = (id, updates) => ({
    type: 'EDIT_EXPANSE',
    id,
    updates
});