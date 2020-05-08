import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpanse, editExpanse, removeExpanse, startAddExpanse, setExpanses, startSetExpanses } from '../../actions/expanses'
import expanses from '../fixtures/expanses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])
beforeEach((done) => {
    const expanseData = {}
    expanses.forEach(({ id, description, note, amount, createdAt }) => {
        expanseData[id] = { description, note, amount, createdAt }
    })
    database.ref('expanses').set(expanseData).then(() => done())
    jest.setTimeout(10000)
})

//testing removeExpanse
test('Should generate removeExpanse action object', () => {
    expect(removeExpanse({ id: '234' })).toEqual({
        type: "REMOVE_EXPANSE",
        id: '234'
    })
})

//testing editExpanse

test('Should generate editExpanse action object', () => {
    let id = "1234abcd"
    let updates = { description: "Water Bill" }
    expect(editExpanse(id, updates)).toEqual({
        type: "EDIT_EXPANSE",
        id: '1234abcd',
        updates: { description: "Water Bill" }
    })
})

//testing addExpanse

test("Should generate addExpanse action", () => {

    expect(addExpanse(expanses[2])).toEqual({
        type: "ADD_EXPANSE",
        expanse: expanses[2]

    })
})

test("should add expanse to database and to store", (done) => {
    const store = createMockStore({})
    const expanseData = {
        description: "Internet Bill",
        note: "i  have paid",
        amount: 123,
        createdAt: 1234562
    }
    store.dispatch(startAddExpanse(expanseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPANSE",
            expanse: {
                id: expect.any(String),
                ...expanseData
            }
        })
        done()
    })
})

test("should add expanse with defaults to database and to store", (done) => {
    const store = createMockStore({})
    store.dispatch(startAddExpanse())
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: "ADD_EXPANSE",
                expanse: {
                    id: expect.any(String),
                    description: '',
                    note: '',
                    amount: 0,
                    createdAt: 0
                }
            })
            done()
        })
})

test("Should setExpanses correctly with data", () => {
    const action = setExpanses(expanses)
    expect(action).toEqual({
        type: "SET_EXPANSES",
        expanses
    })
})

test("should fetch data from firebase", (done) => {
    const store = createMockStore({})
    store.dispatch(startSetExpanses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "SET_EXPANSES",
            expanses
        })
        done()
    })
})