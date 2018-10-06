import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Main from './components/Main'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  )
}

