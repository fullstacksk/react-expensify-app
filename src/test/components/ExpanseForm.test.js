import React from 'react'
import moment from 'moment'
import ExpanseForm from '../../components/ExpanseForm'
import { shallow } from 'enzyme'
import expanses from '../fixtures/expanses'

test("Should render ExpanseForm correctly", () => {
    const wrapper = shallow(<ExpanseForm />)
    expect(wrapper).toMatchSnapshot()
})

test("Should render ExpanseForm with expanse data", () => {
    const wrapper = shallow(<ExpanseForm expanse={expanses[0]} />)
    expect(wrapper).toMatchSnapshot()
})

test("Should render ExpanseForm with error on invalid form submission", () => {
    const wrapper = shallow(<ExpanseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('Form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test("Should set description on input change", () => {
    const value = "New Description"
    const wrapper = shallow(<ExpanseForm />)
    // console.log(wrapper.find('Form').closest('Form.Control'))
    wrapper.find('#description').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})

test("Should set note on textarea change", () => {
    const value = "New Note"
    const wrapper = shallow(<ExpanseForm />)
    // console.log(wrapper.find('Form').closest('Form.Control'))
    wrapper.find('#note').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
})

test("Should set amount if valid input", () => {
    const value = '22.34'
    const wrapper = shallow(<ExpanseForm />)
    // console.log(wrapper.find('Form').closest('Form.Control'))
    wrapper.find('#amount').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)
})

test("Should not set amount if invalid input", () => {
    const value = '22.a34'
    const wrapper = shallow(<ExpanseForm />)
    // console.log(wrapper.find('Form').closest('Form.Control'))
    wrapper.find('#amount').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe("")
})


test("Should call onSubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpanseForm expanse={expanses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('Form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expanses[0].description,
        note: expanses[0].note,
        amount: expanses[0].amount,
        createdAt: expanses[0].createdAt
    })
})

test("Should set new date onDateChange", () => {
    const now = moment()
    const wrapper = shallow(<ExpanseForm />)
    wrapper.find('#singleDatePicker').childAt(2).prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test("Should set calenderFocused onFocusChange", () => {
    const focused = true
    const wrapper = shallow(<ExpanseForm />)
    wrapper.find('#singleDatePicker').childAt(2).prop('onFocusChange')({ focused })
    expect(wrapper.state('calenderFocused')).toBe(focused)
})