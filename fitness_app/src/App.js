import React, { useEffect, useState } from "react";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { useAuthStateListener } from "./supbase/session";

function App({ supabase }) {
  const session = useAuthStateListener();

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
