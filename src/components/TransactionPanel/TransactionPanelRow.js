import React, { Fragment } from 'react'
import { object } from 'prop-types'
import { Col } from 'react-flexbox-grid'
import dateFormatHelper from '../../helpers/dateFormatHelper'

export default function TransactionPanelRow({ transaction }) {
  return (
    <Fragment>
      <Col xs={6} sm={3} md={2} lg={2}>{dateFormatHelper.default(transaction.Date)}</Col>
      <Col xs={6} sm={6} md={4} lg={4}>{transaction.Company}</Col>
      <Col xs={6} sm={3} md={4} lg={4}>{transaction.Ledger}</Col>
      <Col xs={6} sm={3} md={2} lg={2}>{transaction.Amount}</Col>
    </Fragment>
  )
}

TransactionPanelRow.propTypes = {
  transaction: object.isRequired,
}