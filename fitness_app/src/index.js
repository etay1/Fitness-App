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

import  PrivateRoute  from './utils/PrivateRoute';

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
        <Route element={<PrivateRoute supabase={supabase} />}>
          <Route path="/add-exercise" element={<AddExercise/>} />
        </Route>
        <Route element={<PrivateRoute supabase={supabase} />}>
          <Route path="/add-sub-session" exact element={<AddSubSession/>} />
        </Route>
        <Route element={<PrivateRoute supabase={supabase} />}>
          <Route path="/add-user-weight" element={<AddUserWeight/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
