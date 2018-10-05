import React, { Component } from 'react'
import { Col } from 'react-flexbox-grid'
import transactionService from '../../services/transactionService'
import map from 'lodash/map'
import { StyledPanel, StyledPanelTableHeader, StyledPanelBody, StyledPanelBodyEmpty } from '../../styles/StyledPanel'
import TransactionPanelRow from './TransactionPanelRow'

export default class TransactionPanel extends Component {
  state = {
    transactions: 0,
    page: 1,
    transactionCount: 0,
    loading: true,
  }

  componentDidMount() {
    transactionService.get(this.state.page)
    .then((response) => {
      console.log(response)
      this.setState({
        transactions: response.transactions,
        transactionCount: response.totalCount,
        page: response.page + 1
      }) // as a callback, check if we need to fetch the next page and set loaded to true if not
    })
  }

  render() {
    // if loading is true render loading panel
    return (
      <StyledPanel>
        <StyledPanelTableHeader>
          <Col xs={6} sm={3} md={2} lg={2}>Date</Col>
          <Col xs={6} sm={6} md={4} lg={4}>Company</Col>
          <Col xs={6} sm={3} md={4} lg={4}>Account</Col>
          <Col xs={6} sm={3} md={2} lg={2}>Total</Col>
        </StyledPanelTableHeader>
        {this.hasTransactions() && (
          <StyledPanelBody>
            {map(this.state.transactions, (transaction, index) => (
              <TransactionPanelRow key={index} transaction={transaction} />
            ))}
          </StyledPanelBody>
        )}
        {!this.hasTransactions() && (
          <StyledPanelBodyEmpty>
            No transactions found.
          </StyledPanelBodyEmpty>
        )}
      </StyledPanel>
    )
  }

  hasTransactions = () => (
    this.state.transactions.length > 0
  )
}