import React, { useEffect, useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';

function App({ supabase }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [supabase]);

  return (
    <div>
      {session ? (
        <div>
          <h2>Welcome, {session.user.email}</h2>
          <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
        </div>
      ) : (
        <Auth supabaseClient={supabase} />
      )}
    </div>
  );
}

export default App;
