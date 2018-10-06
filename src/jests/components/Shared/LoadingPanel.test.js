import React from 'react'
import { shallow } from 'enzyme'
import LoadingPanel from '../../../components/Shared/LoadingPanel'

describe('rendering the loading bubbles', () => {
  const component = shallow(<LoadingPanel />)

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})

