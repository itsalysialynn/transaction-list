import React from 'react'
import { object } from 'prop-types'
import { Col } from 'react-flexbox-grid'
import dateFormatHelper from '../../helpers/dateFormatHelper'
import numberConversionHelper from '../../helpers/numberConversionHelper'
import { StyledPanelTableRow, StyledColRight } from '../../styles/StyledPanel'
import { TextMuted, TextRed, TextDark } from '../../styles/StyledText'
import LabelAndData from '../Shared/LabelAndData'

export default function TransactionPanelRow({ transaction }) {
  return (
    <StyledPanelTableRow>
      <Col xs={12} sm={6} md={2} lg={2}>
        <LabelAndData label="Date">
          <TextMuted>{dateFormatHelper.default(transaction.Date)}</TextMuted>
        </LabelAndData>
      </Col>
      <Col xs={12} sm={6} md={4} lg={4}>
        <LabelAndData label="Company">
          <TextDark>{transaction.Company}</TextDark>
        </LabelAndData>
      </Col>
      <Col xs={8} sm={6} md={4} lg={4}>
        <LabelAndData label="Account">
          <TextMuted>{transaction.Ledger}</TextMuted>
        </LabelAndData>
      </Col>
      <StyledColRight className="hidden-sm" xs={4} md={2} lg={2}>
        {transaction.Amount < 0 && (
          <LabelAndData label="Amount">
            <TextRed>
              {numberConversionHelper.toCurrency(transaction.Amount)}
            </TextRed>
          </LabelAndData>
        )}
        {transaction.Amount >= 0 && (
          <LabelAndData label="Amount">
            <TextDark>
              {numberConversionHelper.toCurrency(transaction.Amount)}
            </TextDark>
          </LabelAndData>
        )}
      </StyledColRight>
      <Col className="hidden-xs hidden-md hidden-lg hidden-xl" sm={6}>
        {transaction.Amount < 0 && (
          <LabelAndData label="Amount">
            <TextRed>
              {numberConversionHelper.toCurrency(transaction.Amount)}
            </TextRed>
          </LabelAndData>
        )}
        {transaction.Amount >= 0 && (
          <LabelAndData label="Amount">
            <TextDark>
              {numberConversionHelper.toCurrency(transaction.Amount)}
            </TextDark>
          </LabelAndData>
        )}
      </Col>
    </StyledPanelTableRow>
  )
}

TransactionPanelRow.propTypes = {
  transaction: object.isRequired,
}