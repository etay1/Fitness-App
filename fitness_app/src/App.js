import React from 'react'

import { createClient } from '@supabase/supabase-js'

import {
  Auth,
} from '@supabase/auth-ui-react'

import {
  ThemeSupa,
} from '@supabase/auth-ui-shared'


const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_ANON_KEY
)


function App() {

  return (

    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
      />
    </div>


  );
}

export default App;
