import React from 'react'
import { object } from 'prop-types'
import { Col } from 'react-flexbox-grid'
import dateFormatHelper from '../../helpers/dateFormatHelper'
import numberConversionHelper from '../../helpers/numberConversionHelper'
import { StyledPanelTableRow, StyledColRight } from '../../styles/StyledPanel'
import { TextMuted, TextRed, TextDark } from '../../styles/StyledText'

export default function TransactionPanelRow({ transaction }) {
  return (
    <StyledPanelTableRow>
      <Col xs={6} sm={3} md={2} lg={2}>
        <TextMuted>{dateFormatHelper.default(transaction.Date)}</TextMuted>
      </Col>
      <Col xs={6} sm={6} md={4} lg={4}>
        <TextDark>{transaction.Company}</TextDark>
      </Col>
      <Col xs={6} sm={3} md={4} lg={4}>
        <TextMuted>{transaction.Ledger}</TextMuted>
      </Col>
      <StyledColRight xs={6} sm={3} md={2} lg={2}>
      {transaction.Amount < 0 && (
        <TextRed>
          {numberConversionHelper.toCurrency(transaction.Amount)}
        </TextRed>
      )}
      {transaction.Amount >= 0 && (
        <TextDark>
          {numberConversionHelper.toCurrency(transaction.Amount)}
        </TextDark>
      )}
      </StyledColRight>
    </StyledPanelTableRow>
  )
}

TransactionPanelRow.propTypes = {
  transaction: object.isRequired,
}