import React from 'react'
import { shallow } from 'enzyme'
import { AddExpanse } from '../../components/AddExpanse'
import expanses from '../fixtures/expanses'

let startAddExpanse, history, wrapper;
beforeEach(() => {
    startAddExpanse = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpanse startAddExpanse={startAddExpanse} history={history} />)
})

test("SHould render AddExpanse Correctly", () => {
    expect(wrapper).toMatchSnapshot()
})

test("SHould handle onSubmit", () => {
    wrapper.find('ExpanseForm').prop('onSubmit')(expanses[1])
    expect(history.push).toHaveBeenLastCalledWith("/dashboard")
    expect(startAddExpanse).toHaveBeenLastCalledWith(expanses[1])
    expect(wrapper).toMatchSnapshot()
})