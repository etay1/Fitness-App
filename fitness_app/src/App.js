import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Login } from './components/Login/Login';

function App() {
  return (
    <div className="login">
      <Login />
    </div>
  );
}

export default App;
