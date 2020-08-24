import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { useStateValue } from './context';
import Layout from './layout/Principal';
import { GlobalStyle } from './styles';

import { ThemeProvider } from 'styled-components';

import { THEME_LIGHT } from './constants';

import themeLight from './themes/light';
import themeDark from './themes/dark';

const history = createBrowserHistory();

function App() {

  const [state] = useStateValue();

  const theme = state.theme === THEME_LIGHT ? themeLight : themeDark;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router history={history}>
        <Layout />
      </Router>
    </ThemeProvider>
  );
};

export default App;
