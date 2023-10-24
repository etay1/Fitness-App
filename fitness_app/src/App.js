import React, { useEffect, useState } from "react";
import { Login } from "./components/Login/Login";
import { Auth } from "@supabase/auth-ui-react";
import { Dashboard } from "./components/Dashboard/Dashboard";

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
        <Dashboard supabase={supabase} session={session} />
      ) : (
        <Login supabase={supabase} />
      )}
    </div>
  );
}

export default App;
