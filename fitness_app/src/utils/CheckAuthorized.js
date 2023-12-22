// userAuthentication.js

import { useState, useEffect } from "react";
import { supabase } from "../supabase/client";

const CheckAuthroization = () => {
	const [error, setError] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const checkUser = async () => {
			const user = await supabase.auth.getUser();
			setError(user.error != null);
			setIsAuthenticated(true);
		};

		checkUser();
	}, [supabase]);

	return { error, isAuthenticated };
};

export default CheckAuthroization;
