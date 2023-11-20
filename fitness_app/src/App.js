import React, { useEffect, useState } from "react";
import { Login } from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard"; // Import it as the default export
import { useAuthStateListener } from "./supabase/session";
import UserWeightRegistry from "./components/Registry/UserWeightRegistry";

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
