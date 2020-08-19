import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { StateProvider } from './context'
import PrincipalLayout from './components/Layout/PrincipalLayout'
import './App.css'

function App() {
  return (
    <StateProvider>
      <Router>
        <PrincipalLayout />
      </Router>
    </StateProvider>
  );
}

export default App;
