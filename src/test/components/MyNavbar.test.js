import React from 'react'
import { shallow } from 'enzyme'
import { MyNavbar } from '../../components/MyNavbar'
test("Should return MyNavbar component", () => {
    const wrapper = shallow(<MyNavbar />)
    expect(wrapper.find('.navbar-brand').find('kbd').text()).toBe("Expensify")
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<MyNavbar />)
    // console.log(renderer.getRenderOutput())
})