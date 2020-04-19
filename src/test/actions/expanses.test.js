import { addExpanse, editExpanse, removeExpanse } from '../../actions/expanses'

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
    let expanse = {
        description: "Internet Bill",
        note: "Internet Bill Paid",
        amount: 500,
        createdAt: 12457822000
    }
    expect(addExpanse(expanse)).toEqual({
        type: "ADD_EXPANSE",
        expanse: {
            ...expanse,
            id: expect.any(String)
        }

    })
})

//testing addExpanse with no data

test("should generate addExpanse action object default", () => {
    expect(addExpanse()).toEqual({
        type: "ADD_EXPANSE",
        expanse: {
            id: expect.any(String),
            createdAt: 0,
            amount: 0,
            description: '',
            note: ''
        }
    })
})
