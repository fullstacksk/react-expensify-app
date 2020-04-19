import expansesReducer from '../../reducers/expanses'
import expanses from '../fixtures/expanses'

//testing default state by @@INIT
test('Should return default state', () => {
    expect(expansesReducer(undefined, {
        type: "@@INIT"
    })).toEqual([])
})

//testing ADD_EXPANSE
test("Should add one expanse", () => {
    const expanse = {
        description: "Internet Bill",
        amount: 500
    }
    expect(expansesReducer(undefined, {
        type: "ADD_EXPANSE",
        expanse
    })[0]).toEqual({
        ...expanse
    })
})

//testing REMOVE_EXPANSE
test("Should remove the expanse", () => {
    expect(expansesReducer(expanses, {
        type: "REMOVE_EXPANSE",
        id: "12345"
    })).toEqual([
        expanses[0],
        expanses[1]
    ])
})

//testing REMOVE_EXPANSE with false id
test("Should not remove the expanse if expanse not found", () => {
    expect(expansesReducer(expanses, {
        type: "REMOVE_EXPANSE",
        id: "123456789"
    })).toEqual([...expanses])
})

//testiing EDIT_EXPANSE
test("Should edit the expanse", () => {
    expect(expansesReducer(expanses, {
        type: "EDIT_EXPANSE",
        id: "12345",
        updates: { amount: 999.99 }
    })[2].amount).toBe(999.99)
})

//testiing EDIT_EXPANSE wit false id
test("Should not edit the expanse if id not found", () => {
    expect(expansesReducer(expanses, {
        type: "EDIT_EXPANSE",
        id: "123456666",
        updates: { amount: 999.99 }
    })).toEqual([...expanses])
})