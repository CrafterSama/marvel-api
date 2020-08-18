import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrincipalLayout from './components/Layout/PrincipalLayout';
import './App.css';

function App() {
  return (
    <Router>
      <PrincipalLayout />
    </Router>
  );
}

export default App;
