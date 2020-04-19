import moment from 'moment'
import slectExpanses from '../../slectors/expanses'
import expanses from '../fixtures/expanses'


//filter by text
test('Should return filtered expanses by text', () => {
    const filters = {
        text: "e",
        sortBy: '',
        startDate: undefined,
        endDate: undefined
    }
    const action = slectExpanses(expanses, filters)
    expect(action).toEqual([
        expanses[1], expanses[2]
    ])
})
//filter by startDate

test('Should return filtered expanses by startDate', () => {
    const filters = {
        text: "",
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const action = slectExpanses(expanses, filters)
    expect(action).toEqual([
        expanses[2], expanses[0]
    ])
})
//filter by endDate
test('Should return filtered expanses by endDate', () => {
    const filters = {
        text: "",
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment(0).add(2, "days")
    }
    const action = slectExpanses(expanses, filters)
    expect(action).toEqual([
        expanses[0]
    ])
})

//sort by date
test('Should return sorted expanses by Date', () => {
    const filters = {
        text: "",
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment(0).add(4, 'days')
    }
    const action = slectExpanses(expanses, filters)
    expect(action).toEqual([
        expanses[2], expanses[0]
    ])
})
//sort by amount
test('Should return sorted expanses by amount', () => {
    const filters = {
        text: "",
        sortBy: 'amount',
        startDate: moment(0),
        endDate: moment(0).add(4, 'days')
    }
    const action = slectExpanses(expanses, filters)
    expect(action).toEqual([
        expanses[0], expanses[2]
    ])
})

//sort by amount and filter by text, startDate, endDate
test('Should return filtered expanses by text,endDate, startDate and sorted by amount', () => {
    const filters = {
        text: "e",
        sortBy: 'amount',
        startDate: moment(0),
        endDate: moment(0).add(4, 'days')
    }
    const action = slectExpanses(expanses, filters)
    expect(action).toEqual([
        expanses[2]
    ])
})

//sort by date and filter by text, startDate, endDate
test('Should return filtered expanses by text,endDate, startDate and sorted by date', () => {
    const filters = {
        text: "e",
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment(0).add(4, 'days')
    }
    const action = slectExpanses(expanses, filters)
    expect(action).toEqual([
        expanses[2]
    ])
})