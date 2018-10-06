import React from 'react'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

const Toast = () => (
  <StyledToastContainer hideProgressBar position="bottom-right" />
)

const StyledToastContainer = styled(ToastContainer)`
  border-radius: 0.15em;
  font-size: 14px;
`

export default Toast
