import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Dashboard } from './components/Dashboard/Dashboard';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL,process.env.REACT_APP_ANON_KEY);
console.log(supabase)
console.log(process.env.REACT_APP_SUPABASE_URL)
console.log(process.env.REACT_APP_ANON_KEY) 

function App() {
  return (
      <Login />
  );
}

export default App;
