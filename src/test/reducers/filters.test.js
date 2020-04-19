import filtersReducer from '../../reducers/filters';
import moment from 'moment';

// testing filtersReducer by default
test("Should return default filter state", () => {
    expect(filtersReducer(undefined, { type: "@@INIT" })).toEqual({
        text: '',
        sortBy: '',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

//testing SET_FILTER_TEXT

test("Should set filter text", () => {
    expect(filtersReducer(undefined, {
        type: "SET_FILTER_TEXT",
        text: 'water'
    }).text).toBe('water')
})

//testing SORT_BY_AMOUNT
test("Should set sortBy to amount", () => {
    expect(filtersReducer(undefined, { type: "SORT_BY_AMOUNT" }).sortBy).toBe("amount")
})

//testing SORT_BY_DATE
test("hould set sortBy to date", () => {
    expect(filtersReducer(undefined, { type: "SORT_BY_DATE" }).sortBy).toBe("date")
})

//testing SET_START_DATE
test("SHould set startDate", () => {
    expect(filtersReducer(undefined, {
        type: "SET_START_DATE",
        startDate: moment().startOf('month')
    }).startDate).toEqual(moment().startOf('month'))
})

//testing SET_END_DATE
test("Should set endDate", () => {
    expect(filtersReducer(undefined, {
        type: "SET_END_DATE",
        endDate: moment().endOf('month')
    }).endDate).toEqual(moment().endOf('month'))
})