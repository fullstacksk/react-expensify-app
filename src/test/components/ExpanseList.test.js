import React from 'react'
import { shallow } from 'enzyme'
import { ExpanseList } from '../../components/ExpanseList'
import expanses from '../fixtures/expanses'

test("Should render ExpanseList with expanses", () => {
    const wrapper = shallow(<ExpanseList expanses={expanses} />)
    expect(wrapper).toMatchSnapshot()
})

test("Should render ExpanseList with no expanse", () => {
    const wrapper = shallow(<ExpanseList expanses={[]} />)
    expect(wrapper).toMatchSnapshot()
})