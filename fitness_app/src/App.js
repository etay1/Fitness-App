import React from "react";
import { Login } from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard"; // Import it as the default export
import { useSession } from "./supabase/sessionContext";

function App() {
	const { session } = useSession();
	return <div>{session ? <Dashboard /> : <Login />}</div>;
}

export default App;
