import React from 'react'

import { createClient } from '@supabase/supabase-js'

import { Auth } from '@supabase/auth-ui-react'

import { ThemeSupa } from '@supabase/auth-ui-shared'

import { Login } from './components/Login/Login.jsx'


const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_ANON_KEY
)

function App() {

  return (
    <Login/>
  );
}

export default App;
