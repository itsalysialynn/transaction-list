import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'

// wrapped around the whole panel
const StyledPanel = styled.div`
  border: none;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  padding-bottom: padding: 1.9em;
  background-color: ${props => props.theme.white};
`

// used to wrap around StylePanelTableRow so that the first row does not display a top boarder
const StyledPanelBody = styled.div`
  & > div:not(:first-child) {
    border-top: '1pt solid #f0f0f0';
  }
`

// used for table headers on the panel
const StyledPanelTableHeader = styled(Row)`
  background-color: ${props => props.theme.white};
  padding: .85em;
  font-weight: 500;
  border-radius: .15em .15em 0px 0px;
  font-size: 15px;
  color: ${props => props.theme.brandGreen};
  margin: 0 !important;
`

const StyledPanelTableRow = styled(Row)`
  background-image: linear-gradient(#fbfaf9, #fefefd);
  clear:both;
  padding: .9em .85em .85em .85em;
  margin: 0 !important; 
  border-top: 1pt solid #f0f0f0;
`

// used as the panel body if you are conditionally displaying an il8n empty message and not using a footer
const StyledPanelBodyEmpty = styled.div`
  color: ${props => props.theme.mutedText};
  border-radius: 0 0 0.15em 0.15em;
  padding: 1em 0 1em 1.5em;
  font-size: 16px;
  border-top: 1pt solid #f0f0f0;
`

const StyledColRight = styled(Col)`
  text-align: right;
`

export {
  StyledPanelBodyEmpty,
  StyledPanelTableRow,
  StyledPanelTableHeader,
  StyledPanelBody,
  StyledPanel,
  StyledColRight,
}
