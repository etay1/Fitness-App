import { useState, useEffect } from "react";
import * as Yup from "yup";
import { isStartTimeBeforeEndTime } from "../../utils/IsStartTimeBeforeEndTime";

export default function useSubSessionValidationSchema(
	category,
	updateSuccessMessage
) {
	const [validationSchema, setValidationSchema] = useState(null);
	const [key, setKey] = useState(0);

	useEffect(() => {
		if (category === "strength") {
			setValidationSchema(
				Yup.object().shape({
					exerciseName: Yup.string().required("Exercise Name is required"),
					exerciseId: Yup.number(),
					startTime: Yup.string().required("Start Time is required"),
					endTime: Yup.string()
						.required("End Time is required")
						.test(
							"is-before-end-time",
							"Start time must be before end time",
							function (value) {
								const startTime = this.parent.startTime;
								console.log("startTime: ", startTime, "endTime: ", value);
								return isStartTimeBeforeEndTime(startTime, value);
							}
						),
					sets: Yup.number().required().min(1, "Sets must be greater than 0"),
					repsPerSet: Yup.number()
						.required()
						.min(1, "Reps must be greater than 0"),
				})
			);
		} else if (category === "cardio") {
			setValidationSchema(
				Yup.object().shape({
					exerciseName: Yup.string().required("Exercise Name is required"),
					exerciseId: Yup.number(),
					startTime: Yup.string().required("Start Time is required"),
					endTime: Yup.string()
						.required("End Time is required")
						.test(
							"is-before-end-time",
							"Start time must be before end time",
							function (value) {
								const startTime = this.parent.startTime;
								console.log("startTime: ", startTime, "endTime: ", value);
								return isStartTimeBeforeEndTime(startTime, value);
							}
						),
				})
			);
		}
		// console.log(category);
		setKey((prevKey) => prevKey + 1);
		updateSuccessMessage("");
	}, [category]);

	return { validationSchema, key };
}
