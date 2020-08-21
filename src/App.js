import React from 'react'
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom'
import { StateProvider } from './context'
import PrincipalLayout from './components/Layout/PrincipalLayout'
import './App.css'

const history = createBrowserHistory();

function App() {
  return (
    <StateProvider>
      <Router history={history}>
        <PrincipalLayout />
      </Router>
    </StateProvider>
  );
}

export default App;
