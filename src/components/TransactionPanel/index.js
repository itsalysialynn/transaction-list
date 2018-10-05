import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import map from 'lodash/map';

export default class TransactionPanel extends Component {
  state = {
    transactions: null,
  }

  componentDidMount() {
    // fetch data and set state
  }

  render() {
    return (
      <StyledPanelHeader>
        <Col xs={6} sm={3} md={2} lg={2}>Date</Col>
        <Col xs={6} sm={6} md={4} lg={4}>Company</Col>
        <Col xs={6} sm={3} md={4} lg={4}>Account</Col>
        <Col xs={6} sm={3} md={2} lg={2}>Total</Col>
      </StyledPanelHeader>
    )
  }
}

const StyledPanelHeader = styled(Row)`
  background-color: ${props => props.theme.white};
  padding: .85em;
  font-weight: 500;
  border-radius: .15em .15em 0px 0px;
  font-size: 16px;
  color: ${props => props.theme.brandGreen};
`