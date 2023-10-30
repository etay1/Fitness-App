import { useState, useEffect } from "react";
import { supabase } from "./client";

export function useAuthStateListener() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const authStateChange = (_event, session) => setSession(session);
    supabase.auth.onAuthStateChange(authStateChange);
  }, []);

  return session;
}
