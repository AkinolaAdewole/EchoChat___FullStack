import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Join from './components/join/Join';
import Chat from './components/Chat';

function App() {
  return (
   <>
      <Routes>
        <Route path='/' exact Component={Join} />
        <Route path='/client' Component={Chat} />
      </Routes>
   </>
  );
}

export default App;
