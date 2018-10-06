import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-flexbox-grid'
import { TextMuted } from '../../styles/StyledText'

export default function LabelAndData(props) {
  const noChildren = () => {
    const { children } = props
    return (children === null || typeof children === 'undefined' || children === '')
  }

  return (
    <Row>
      <Col className="hidden-md hidden-lg hidden-xl" sm={12} xs={12}>
        <TextMuted><small>{props.label}</small></TextMuted>
      </Col>
      <Col sm={12} xs={12}>
        {noChildren() ? <span>&mdash;</span> : props.children}
      </Col>
    </Row>
  )
}

LabelAndData.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
}
