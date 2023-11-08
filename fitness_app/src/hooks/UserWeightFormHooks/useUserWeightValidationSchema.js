import { useState, useEffect } from "react";
import * as Yup from "yup";

export default function useUserWeightValidationSchema(
	session,
	updateSuccessMessage
) {
	const [validationSchema, setValidationSchema] = useState(null);
	const [key, setKey] = useState(0);

	useEffect(() => {
		setValidationSchema(
			Yup.object().shape({
				date: Yup.date().required("Date is required"),
				weight: Yup.number()
					.min(30, "Please enter a weight above 30")
					.max(1499, "Please enter a weight below 1499lbs"),
			})
		);
		setKey((prevKey) => prevKey + 1);
		updateSuccessMessage("");
	}, [session]);

	return { validationSchema, key };
}
