import React from 'react'
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'
import { MyNavbar } from '../../components/MyNavbar'
test("Should return MyNavbar component", () => {
    const wrapper = shallow(<MyNavbar startLogout={() => { }} isAuthenticated={true} />)
    expect(wrapper).toMatchSnapshot()
    // expect(wrapper.find('.navbar-brand').find('kbd').text()).toBe("Expensify")
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<MyNavbar />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test("Should call startLogout", () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<MyNavbar startLogout={startLogout} isAuthenticated={true} />)
    wrapper.find('#logout').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})