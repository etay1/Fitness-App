// supabase/sessionContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthStateListener } from "./session";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
	const [session, setSession] = useState(null);

	// Move the call to useAuthStateListener outside of useEffect
	const initialSession = useAuthStateListener();

	useEffect(() => {
		setSession(initialSession);
	}, [initialSession]);

	return (
		<SessionContext.Provider value={{ session, setSession }}>
			{children}
		</SessionContext.Provider>
	);
};

export const useSession = () => useContext(SessionContext);
