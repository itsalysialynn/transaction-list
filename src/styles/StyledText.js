import styled from 'styled-components'

const Text = styled.div`
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap; 
  overflow: hidden;
`
const TextMuted = styled(Text)`
  color: ${props => props.theme.mutedText};
  font-weight: 400;
`
const TextDark = styled(Text)`
  color: ${props => props.theme.darkText};
  font-weight: 500;

`
const TextRed = styled(Text)`
  color: ${props => props.theme.brandRed};
  font-weight: 500;
`

const TextGreen = styled(Text)`
  color: ${props => props.theme.brandGreen};
  font-weight: 500;
`

export {
  TextGreen,
  TextRed,
  TextDark,
  TextMuted,
}
