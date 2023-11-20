import React, { useEffect, useState } from "react";
import { Login } from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard"; // Import it as the default export
import { useSession } from "./supabase/sessionContext";
import { supabase } from "./supabase/client";

function App() {
	const { session } = useSession();
	return <div>{session ? <Dashboard /> : <Login supabase={supabase} />}</div>;
}

export default App;
