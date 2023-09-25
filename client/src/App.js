import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
          {/* <Route path="/chat/:room" element={<Chat />} /> */}
          {/* <Route path='*' element={<Error404/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
