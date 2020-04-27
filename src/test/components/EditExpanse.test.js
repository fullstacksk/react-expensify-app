import React from 'react'
import { shallow } from 'enzyme'
import { EditExpanse } from '../../components/EditExpanse'
import expanses from '../fixtures/expanses'

let editExpanse, removeExpanse, history, wrapper;

beforeEach(() => {
    editExpanse = jest.fn()
    removeExpanse = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpanse
        expanse={expanses[2]}
        editExpanse={editExpanse}
        removeExpanse={removeExpanse}
        history={history}
    />)
})

test("Should render EditExpanse page correctly", () => {
    expect(wrapper).toMatchSnapshot()
})
test("Should handle editExpanse", () => {
    wrapper.find('ExpanseForm').prop('onSubmit')(expanses[2])
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(editExpanse).toHaveBeenLastCalledWith(expanses[2].id, expanses[2])
})
test("Should handle removeExpanse", () => {
    wrapper.find('ExpanseForm').prop('removeExpanse')()
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(removeExpanse).toHaveBeenLastCalledWith(expanses[2].id)
})