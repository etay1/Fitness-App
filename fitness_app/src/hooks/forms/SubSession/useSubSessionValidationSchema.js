import { useState, useEffect } from "react";
import * as Yup from "yup";
import { isStartTimeBeforeEndTime, areDatesEqual } from "../../../utils/CheckFormDates";

// Custom hook to manage the validation schema and form values
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
					dropDownSelection: Yup.string().required("Exercise Name is required"),
					startTime: Yup.string().required("Start Time is required"),
					endTime: Yup.string()
						.required("End Time is required")
						.test(
							"isBeforeEndTime",
							"Start Time must be before End Time",
							function (endTime) {
								const startTime = this.parent.startTime;
								return isStartTimeBeforeEndTime(startTime, endTime);
							}
						)
						.test(
							"areDatesEqual",
							"Start Time and End Time must have the same date",
							function (endTime) {
								const startTime = this.parent.startTime;
								return areDatesEqual(startTime, endTime);
							}
						),
					sets: Yup.number()
						.required("Sets is required")
						.min(1, "Sets must be greater than 0"),
					reps: Yup.number()
						.required("Reps is required")
						.min(1, "Reps must be greater than 0"),
				})
			);
		} else if (category === "cardio") {
			setValidationSchema(
				Yup.object().shape({
					dropDownSelection: Yup.string().required("Exercise Name is required"),
					startTime: Yup.string().required("Start Time is required"),
					endTime: Yup.string()
						.required("End Time is required")
						.test(
							"isBeforeEndTime",
							"Start Time must be before End Time",
							function (endTime) {
								const startTime = this.parent.startTime;
								return isStartTimeBeforeEndTime(startTime, endTime);
							}
						),
				})
			);
		}
		console.log(category);
		setKey((prevKey) => prevKey + 1);
		updateSuccessMessage("");
	}, [category]);

	return { validationSchema, key };
}
