import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

import AddExercise from './components/AddExercise/AddExercise';
import { AddSubSession } from './components/AddSubSession/AddSubSession';
import { AddUserWeight } from './components/AddUserWeight/AddUserWeight';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_ANON_KEY
);

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App supabase={supabase} />} />
        <Route path="/add-exercise" element={<AddExercise/>} />
        <Route path="/add-sub-session" element={<AddSubSession/>} />
        <Route path="/add-user-weight" element={<AddUserWeight/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
