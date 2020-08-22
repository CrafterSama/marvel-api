import React from 'react'
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom'
import { StateProvider } from './context'
import Layout from './components/Layout'
import './App.css'

const history = createBrowserHistory();

function App() {
  return (
    <StateProvider>
      <Router history={history}>
        <Layout />
      </Router>
    </StateProvider>
  );
}

export default App;
