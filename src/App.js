import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'
import TopNav from './components/TopNav'

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TopNav />
      </ThemeProvider>
    );
  }
}


