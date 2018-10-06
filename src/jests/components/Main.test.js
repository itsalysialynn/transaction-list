import React from 'react'
import { shallow } from 'enzyme'
import Main from '../../components/Main'

/* global describe, it, expect,  test */

describe('should render', () => {
  const component = shallow(<Main />)

  test('should render the top nav', () => {
    expect(component.find('TopNav').length).toEqual(1)
  })

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})