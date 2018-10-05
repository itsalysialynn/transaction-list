import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    );
  }
}


