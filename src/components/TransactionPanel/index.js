import React, { Component } from 'react'
import { Col } from 'react-flexbox-grid'
import map from 'lodash/map'
import get from 'lodash/get'
import concat from 'lodash/concat'
import sum from 'lodash/sum'
import transactionService from '../../services/transactionService'
import {
  StyledPanel,
  StyledColRight,
  StyledPanelTableHeader,
  StyledPanelBody,
  StyledPanelBodyEmpty,
} from '../../styles/StyledPanel'
import TransactionPanelRow from './TransactionPanelRow'
import numberConversionHelper from '../../helpers/numberConversionHelper'
import LoadingPanel from '../Shared/LoadingPanel'

export default class TransactionPanel extends Component {
  state = {
    transactions: [],
    loading: true,
  }

  componentDidMount() {
    this.fetchTransactions(1)
  }

  render() {
    if (this.state.loading) { return <LoadingPanel /> }

    return (
      <StyledPanel>
        <StyledPanelTableHeader>
          <Col className="hidden-xs hidden-sm" md={2} lg={2}>Date</Col>
          <Col className="hidden-xs hidden-sm" md={4} lg={4}>Company</Col>
          <Col className="hidden-xs hidden-sm" md={4} lg={4}>Account</Col>
          <StyledColRight xs={12} sm={12} md={2} lg={2}>
            {numberConversionHelper.toCurrency(this.calculateTotal())}
          </StyledColRight>
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

  fetchTransactions = (page) => {
    transactionService.get(page)
      .then((response) => {
        const currentTransactions = this.state.transactions
        this.setState({
          transactions: concat(currentTransactions, get(response, 'transactions', [])),
        }, () => this.fetchNextPage(get(response, 'totalCount'), get(response, 'page')))
      })
  }

  fetchNextPage = (totalTransactions, currentPage) => {
    if (!totalTransactions || !currentPage) { return null }
    if (this.state.transactions.length !== totalTransactions) {
      return this.fetchTransactions(currentPage + 1)
    }
    this.setState({ loading: false })
  }

  calculateTotal = () => (
    sum(map(this.state.transactions, transaction => +transaction.Amount)) || 0
  )

  hasTransactions = () => (
    this.state.transactions.length > 0
  )
}
