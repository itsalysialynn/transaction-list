import React from 'react';
import styled from 'styled-components';

export default function TopNav() {
  return (
    <StyledTopNavContainer>
      <StyledTopNavText>Bench Test</StyledTopNavText>
    </StyledTopNavContainer>
  )
}

const StyledTopNavContainer = styled.div`
  background-color: ${props => props.theme.brandGreen};
`

const StyledTopNavText = styled.div`
  text-align: center;
  padding: 1.65em;
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.theme.white};
`