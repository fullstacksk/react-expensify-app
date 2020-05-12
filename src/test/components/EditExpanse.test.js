import React from 'react'
import { shallow } from 'enzyme'
import { EditExpanse } from '../../components/EditExpanse'
import expanses from '../fixtures/expanses'

let startEditExpanse, startRemoveExpanse, history, wrapper;

beforeEach(() => {
    startEditExpanse = jest.fn()
    startRemoveExpanse = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpanse
        expanse={expanses[2]}
        startEditExpanse={startEditExpanse}
        startRemoveExpanse={startRemoveExpanse}
        history={history}
    />)
})

test("Should render EditExpanse page correctly", () => {
    expect(wrapper).toMatchSnapshot()
})
test("Should handle startEditExpanse", () => {
    wrapper.find('ExpanseForm').prop('onSubmit')(expanses[2])
    expect(history.push).toHaveBeenLastCalledWith("/dashboard")
    expect(startEditExpanse).toHaveBeenLastCalledWith(expanses[2].id, expanses[2])
})
test("Should handle startRemoveExpanse", () => {
    wrapper.find('ExpanseForm').prop('startRemoveExpanse')()
    expect(history.push).toHaveBeenLastCalledWith("/dashboard")
    expect(startRemoveExpanse).toHaveBeenLastCalledWith(expanses[2].id)
})