import { useState, useEffect } from "react";
import { HandleDatabaseError } from "../../utils/HandleDatabaseError";
import { supabase } from "../../supabase/client";

export function useSubSessionForm(category, updateSuccessMessage) {
	const [exerciseList, setExerciseList] = useState([]);
	const [isSuccess, setIsSuccess] = useState(false);
	const [exerciseData, setExerciseData] = useState({
		exerciseName: "",
		startTime: 0,
		endTime: 0,
		sets: 0,
		repsPerSet: 0,
	});

	useEffect(() => {
		const fetchExerciseData = async () => {
			if (category === "strength") {
				let { data: weight_exercise, error } = await supabase
					.from("weight_exercise")
					.select("name,weight_exercise_id");

				setExerciseList(weight_exercise);
			}
			if (category === "cardio") {
				let { data: cardio_exercise, error } = await supabase
					.from("cardio_exercise")
					.select("name,cardio_exercise_id");

				setExerciseList(cardio_exercise);
			}
		};

		// Call the async function
		fetchExerciseData();
	}, [category]);

	const handleInsertion = async (values) => {
		try {
			const {
				exerciseName,
				exercise_id,
				startTime,
				endTime,
				sets,
				repsPerSet,
			} = values;

			// Define the common data to insert into both tables
			const commonData = {
				// session id hardcoded for insertion
				session_id: 1,
				start_time: startTime,
				end_time: endTime,
			};

			if (category === "cardio") {
				// INSERT INTO cardio_session
				const { data2, error2 } = await supabase
					.from("cardio_session")
					.insert([{ ...commonData, cardio_exercise_id: exercise_id }]);

				if (error2) {
					throw error2;
				}
				setIsSuccess(true);
				updateSuccessMessage("Successfully added Cardio Workout.");
			} else {
				const strengthData = {
					weight_exercise_id: exercise_id,
					sets: sets,
					reps_per_set: repsPerSet,
				};

				// INSERT INTO weight_session
				const { data, error2 } = await supabase
					.from("weight_session")
					.insert([{ ...commonData, ...strengthData }]);
				if (error2) {
					throw error2;
				}

				setIsSuccess(true);
				updateSuccessMessage("Successfully added Strength Workout.");
			}
		} catch (error) {
			const errorCode = error.code;
			HandleDatabaseError(errorCode, updateSuccessMessage);
			setIsSuccess(false);
		}
	};

	return {
		exerciseData,
		isSuccess,
		exerciseList,
		handleInsertion,
	};
}
