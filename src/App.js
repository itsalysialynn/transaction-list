import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Main from './components/Main'

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    )
  }
}


