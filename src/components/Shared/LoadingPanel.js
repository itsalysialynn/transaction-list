import React from 'react'
import ReactLoading from 'react-loading'
import { StyledPanel } from '../../styles/StyledPanel'
import styled from 'styled-components'
 
export default function LoadingPanel() {
  return (
    <StyledLoadingBubbles type={'bubbles'} color={'#098B8C'} height={200} />
  )
}

const StyledLoadingBubbles = styled(ReactLoading)`
  position: absolute;
  top: 50%;
  left: 50%;
`