import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from './components/join/Join';
import Chat from './components/chat/Chat';

function App() {
  return (
   <>
      <Router>
        <Routes>
            <Route path='/' exact Component={Join} />
            <Route path='/chat' Component={Chat} />
        </Routes>
      </Router>
   </>
  );
}

export default App;
