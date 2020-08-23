import React from 'react'
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom'
import { StateProvider } from './context'
import Layout from './layout/Principal'
import { GlobalStyle } from './styles';

const history = createBrowserHistory();

function App() {
  return (
    <StateProvider>
      <GlobalStyle />
      <Router history={history}>
        <Layout />
      </Router>
    </StateProvider>
  );
};

export default App;
