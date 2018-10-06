import React from 'react'
import { shallow } from 'enzyme'
import TransactionPanelRow from '../../../components/TransactionPanel/TransactionPanelRow'

/* global describe, it, expect, test, jest, test  */

const props = {
  transaction: {
    Date: '2016-01-29T17:35:00.000-07:00',
    Amount: '-5',
    Ledger: 'Interest Earned',
    Company: 'TD'
  },
}

describe('rendering transaction panel', () => {
  const component = shallow(<TransactionPanelRow {...props} />)
  expect(component.html()).toMatch('Interest Earned')
  expect(component.html()).toMatch('Jan 29th, 2016')
  expect(component.html()).toMatch('($5.00)')
  expect(component.html()).toMatch('TD')

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})


