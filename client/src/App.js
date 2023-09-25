import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from './components/Join';
import Chat from './components/Chat';

function App() {
  return (
   <>
      <Router>
        <Route path='/' exact Component={Join} />
        <Route path='/client' Component={Chat} />
      </Router>
   </>
  );
}

export default App;
