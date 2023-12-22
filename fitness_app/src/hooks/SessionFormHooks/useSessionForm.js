import { useState } from "react";
import { supabase } from "../../supabase/client";
import { useSession } from "../../supabase/sessionContext";

export function useSessionForm(updateSuccessMessage) {
	const { session } = useSession();

	const [isSuccess, setIsSuccess] = useState(false);

	const userId = session.user.id;

	const handleInsertion = async (values) => {};

	return {
		isSuccess,
		handleInsertion,
	};
}

export default useSessionForm;
