import moment from 'moment'
import {
    setStartDate,
    setEndDate,
    setFilterText,
    sortByDate,
    sortByAmount
} from '../../actions/filters'
//testing setStartDate
test("Should generate setStartDate action object", () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
})

//testing setEndDate
test("Should generate setEndDate action object", () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
})

//testing sortByDate
test("Should return sortByDate action object", () => {
    expect(sortByDate()).toEqual({
        type: "SORT_BY_DATE"
    })
})

//testing sortByAmount
test("Should return sortByAmount action object", () => {
    expect(sortByAmount()).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})

//testing setFilterText with text
test("Should generate setTextFilter action object with text value", () => {
    const text = "something in"
    const action = setFilterText(text)
    expect(action).toEqual({
        type: "SET_FILTER_TEXT",
        text
    })
})
//testing setFilterText with default
test("Should generate setTextFilter action object with default value", () => {
    const action = setFilterText()
    expect(action).toEqual({
        type: "SET_FILTER_TEXT",
        text: ''
    })
})