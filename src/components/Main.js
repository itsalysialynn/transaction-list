import React, { Fragment } from 'react'
import styled from 'styled-components'
import TopNav from './TopNav'
import TransactionPanel from './TransactionPanel'
import Toast from './Shared/Toast'

export default function Main() {
  return (
    <Fragment>
      <TopNav />
      <StyledMainBody>
        <TransactionPanel />
        <Toast />
      </StyledMainBody>
    </Fragment>
  )
}

const StyledMainBody = styled.div`
  padding: 1.9em;
`
