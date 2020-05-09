
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

//START_REMOVE_EXPANSE
export const startRemoveExpanse = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`expanses/${id}`).remove()
            .then(() => {
                dispatch(removeExpanse({ id }))
            })
            .catch((e) => {
                console.log("Expanse deletion failed!")
            })
    }
}
// EDIT_EXPANSE
export const editExpanse = (id, updates) => ({
    type: 'EDIT_EXPANSE',
    id,
    updates
});

//START_EDIT_EXPANSE

export const startEditExpanse = (id, updates) => {
    return (dispatch) => {
        return database.ref(`expanses/${id}`)
            .set(updates)
            .then(() => {
                dispatch(editExpanse(id, updates))
            })
            .catch((e) => {
                console.log("Expanse editing failed!")
            })
    }
}

//SET_EXPANSES
export const setExpanses = (expanses) => ({
    type: "SET_EXPANSES",
    expanses
})

export const startSetExpanses = () => {
    return (dispatch) => {
        return database.ref('expanses')
            .once('value')
            .then((snapshot) => {
                const expanses = []
                snapshot.forEach((childSnapshot) => {
                    const expanse = {
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    }
                    expanses.push(expanse)
                })
                dispatch(setExpanses(expanses))
            })
            .catch((e) => {
                console.log("Setting up of expanses got failed", e)
            })
    }
}