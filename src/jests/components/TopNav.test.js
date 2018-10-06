import React from 'react'
import { shallow } from 'enzyme'
import TopNav from '../../components/TopNav'

/* global describe, it, expect,  test */

describe('should render', () => {
  const component = shallow(<TopNav />)

  test('should render the text', () => {
    expect(component.html()).toMatch('Bench Test')
  })

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})