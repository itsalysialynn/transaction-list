import React, { Fragment } from 'react'
import styled from 'styled-components'
import TopNav from './TopNav'
import TransactionPanel from './TransactionPanel/index'

export default function Main(props) {
  return (
    <Fragment>
      <TopNav />
      <StyledMainBody>
        <TransactionPanel />
      </StyledMainBody>
    </Fragment>
  )
}

const StyledMainBody = styled.div`
  padding: 1.9em
`

