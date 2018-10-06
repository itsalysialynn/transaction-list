import React from 'react'
import { shallow } from 'enzyme'
import TransactionPanel from '../../../components/TransactionPanel'

/* global describe, it, expect, test, jest, test  */

describe('loading', () => {
  const component = shallow(<TransactionPanel />).setState({ loading: true })

  it('should render the loading panel', () => {
    expect(component.find('LoadingPanel').length).toEqual(1)
  })
})

describe('no transactions', () => {
  const component = shallow(<TransactionPanel />).setState({ transactions: [], loading: false  })

  it('should render the empty message', () => {
    expect(component.html()).toMatch('No transactions found.')
  })

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})

describe('rendering transaction panel', () => {
  const state = { transactions: [ { id: 1, Amount: '-5' } ], loading: false }
  const component = shallow(<TransactionPanel />).setState(state)

  it('should render the row', () => {
    expect(component.html()).toMatch('Date')
    expect(component.html()).toMatch('Company')
    expect(component.html()).toMatch('Account')
    expect(component.html()).toMatch('($5.00)')
  })

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})

describe('calculating the total', () => {
  const state = {
    loading: false,
    transactions: [
      { id: 1, Amount: '525.00' },
      { id: 1, Amount: '6.29' },
      { id: 1, Amount: '5.495' },
      { id: 1, Amount: '-27' },
      { id: 1, Amount: '-73.02' },
    ],
  }
  const component = shallow(<TransactionPanel />).setState(state)

  it('should add up all the transactions', () => {
    expect(component.instance().calculateTotal()).toEqual(436.765)
  })
})


