import React from 'react'
import { shallow } from 'enzyme'
import ExpanseDashboard from '../../components/ExpanseDashboard'

test("Should render ExpanseDashboard", () => {
    const wrapper = shallow(<ExpanseDashboard />)
    expect(wrapper).toMatchSnapshot()
})