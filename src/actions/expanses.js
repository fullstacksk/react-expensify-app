
import { v4 as uuid } from 'uuid';
// ADD_EXPANSE
export const addExpanse = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => (
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