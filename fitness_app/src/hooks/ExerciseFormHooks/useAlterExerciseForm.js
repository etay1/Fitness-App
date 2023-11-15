import { useState } from "react";
import { HandleDatabaseError } from "../../utils/HandleDatabaseError";
import { useSuccessMessage } from "../useSuccessMessage";
import useRefreshPage from "../../hooks/useRefreshPage";

export function useAlterExerciseForm(supabase, updateSuccessMessage) {
	const [isSuccess, setIsSuccess] = useState(false);
	const handleRefresh = useRefreshPage();
	const handleAlter = async (values, exerciseType) => {
		const {
			exerciseId,
			exerciseName,
			caloriesPerRep,
			caloriesPerDuration,
			description,
		} = values;
		console.log(exerciseType);

		const tableName =
			exerciseType === "cardio" ? "cardio_exercise" : "weight_exercise";
		const exerciseIdColumn =
			exerciseType === "cardio" ? "cardio_exercise_id" : "weight_exercise_id";
		const calorieColumn =
			exerciseType === "cardio"
				? "calories_per_unit_duration"
				: "calories_per_rep";
		const calories =
			exerciseType === "cardio" ? caloriesPerDuration : caloriesPerRep;
		console.log(supabase);
		console.log(calorieColumn, exerciseId, calories, exerciseIdColumn);
		try {
			const { data, error } = await supabase
				.from(tableName)
				.update({
					name: exerciseName,
					description,
					calories_per_rep: caloriesPerRep,
				})
				.eq("weight_exercise_id", exerciseId)
				.select();

			console.log(data, error);
			if (error) {
				throw error;
			}
			handleRefresh();
			setIsSuccess(true);
			updateSuccessMessage(`Exercise updated successfully.`);
		} catch (error) {
			console.error("db error: ", error);
			const errorCode = error.code;
			HandleDatabaseError(errorCode, updateSuccessMessage);
			setIsSuccess(false);
		}
	};

	return { isSuccess, handleAlter };
}

export default useAlterExerciseForm;
