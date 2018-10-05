import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import transactionService from '../../services/transactionService'
import map from 'lodash/map'
import { StyledPanel, StyledPanelTableHeader, StyledPanelBody, StyledPanelBodyEmpty } from '../../styles/StyledPanel'

export default class TransactionPanel extends Component {
  state = {
    transactions: 0,
    page: 1,
    transactionCount: 0,
  }

  componentDidMount() {
    transactionService.get(this.state.page)
    .then((response) => {
      this.setState({
        transactions: response.transactions,
        transactionCount: response.totalCount,
        page: response.page + 1
      })
    })
  }

  render() {
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

          </StyledPanelBody>
        )}
        {/* {!this.hasTransactions() && ( */}
          <StyledPanelBodyEmpty>
            No transactions found.
          </StyledPanelBodyEmpty>
        {/* )} */}
      </StyledPanel>
    )
  }

  hasTransactions = () => (
    this.state.transactions.length > 0
  )
}

const StyledPanelHeader = styled(Row)`

`