import React from "react";

import { createClient } from "@supabase/supabase-js";

import { Auth } from "@supabase/auth-ui-react";

import { ThemeSupa } from "@supabase/auth-ui-shared";

import { Login } from "./components/Login/Login.jsx";

import { Dashboard } from "./components/Dashboard/Dashboard.jsx";





import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_ANON_KEY
);


const { data: { user } } = await supabase.auth.getUser()


export const PrivateRoute = ({ children}) => {
  console.log(user);
  if (user == null) {
    return <Navigate to="/" />
  }
    
  return children;
}

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
      </Routes>
    </Router>
  );
}

export default App;
