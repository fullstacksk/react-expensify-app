import React from 'react'
import { shallow } from 'enzyme'
import { Login } from '../../components/Login'

test("Should render Login correctly", () => {
    const wrapper = shallow(<Login startLogin={() => { }} isAuthenticated={true} />)
    expect(wrapper).toMatchSnapshot()
})

test("Should call startLogin", () => {
    const startLogin = jest.fn()
    const wrapper = shallow(<Login startLogin={startLogin} isAuthenticated={true} />)
    wrapper.find('#loginWithGoogle').simulate('click')
    expect(startLogin).toHaveBeenCalled()

})