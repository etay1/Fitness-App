import React, { useEffect, useState } from "react";
import { Login } from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard"; // Import it as the default export
import { useSession } from "./supabase/sessionContext";

function App({ supabase }) {
	const { session } = useSession();
	return (
		<div>
			{session ? (
				<Dashboard supabase={supabase} />
			) : (
				<Login supabase={supabase} />
			)}
		</div>
	);
}

export default App;
