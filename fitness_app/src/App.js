import React from "react";
import { Login } from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard"; // Import it as the default export
import { useSession } from "./supabase/sessionContext";


function App() {
	const { session } = useSession();
	return <div>{session ? <Dashboard /> : <Login />}</div>;
}

export default App;
