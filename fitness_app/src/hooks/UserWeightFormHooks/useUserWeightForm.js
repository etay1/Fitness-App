import { useState } from "react";
import { supabase } from "../../supabase/client";
import { useSession } from "../../supabase/sessionContext";

export function useUserWeightForm(updateSuccessMessage) {
	const { session } = useSession();

	const [isSuccess, setIsSuccess] = useState(false);

	const userId = session.user.id;

	const handleInsertion = async (values) => {
		try {
			const { weight, date } = values;
			console.log(values);
			const tableName = "user_weight";
			const { data, error } = await supabase
				.from(tableName)
				.insert([{ user_id: userId, weight, date }]);

			if (error) {
				throw error;
			}

			setIsSuccess(true);
			updateSuccessMessage(`Successfully added weight`);
		} catch (e) {
			console.log("db error", e);
			updateSuccessMessage("Failed to add weight");
			setIsSuccess(false);
		}
	};

	return {
		isSuccess,
		handleInsertion,
	};
}

export default useUserWeightForm;
