import React from 'react'
import { shallow } from 'enzyme'
import { ExpanseListFilters } from '../../components/ExpanseListFilters'

test("Should render ExpanseListFilters correctly", () => {
    const wrapper = shallow(<ExpanseListFilters filters={{}} />)
    expect(wrapper).toMatchSnapshot()
})