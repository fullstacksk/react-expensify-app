import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'
import { ExpanseListFilters } from '../../components/ExpanseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setEndDate, setFilterText, setStartDate, sortByAmount, sortByDate, wrapper;
beforeEach(() => {
    setFilterText = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpanseListFilters
        setFilterText={setFilterText}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        filters={filters}
    />)
})

test("Should render ExpanseListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot()
})

test("Should render ExpanseListFilters with alt data correctly", () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test("Should handle onTextChange", () => {
    const value = "water";
    wrapper.find('#filterText').simulate('change', { target: { value } })
    expect(setFilterText).toHaveBeenLastCalledWith(value)
})

test("Should handle sortByDate", () => {
    const value = "date";
    wrapper.find('#sortBy').simulate('change', { target: { value } })
    expect(sortByDate).toHaveBeenLastCalledWith()
})
test("Should handle sortByAmount", () => {
    const value = "amount";
    wrapper.find('#sortBy').simulate('change', { target: { value } })
    expect(sortByAmount).toHaveBeenLastCalledWith()
})

test("Should handle onDatesChange ", () => {
    const startDate = moment(0).add(5, 'years')
    const endDate = moment(0).add(10, 'years')
    wrapper.find('#dateRangePicker').childAt(0).prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test("Should handle onFocusChange ", () => {
    const calenderFocused = 'endDate';
    wrapper.find('#dateRangePicker').childAt(0).prop('onFocusChange')(calenderFocused)
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
})