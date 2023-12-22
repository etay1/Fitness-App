import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useSession } from "../../supabase/sessionContext";
import { isStartTimeBeforeEndTime } from "../../utils/IsStartTimeBeforeEndTime";

export default function useSessionValidationSchema(updateSuccessMessage) {
	const { session } = useSession();
	const [validationSchema, setValidationSchema] = useState(null);
	const [key, setKey] = useState(0);

	useEffect(() => {
		setValidationSchema(
			Yup.object().shape({
				date: Yup.date().required("Date is required"),
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
		setKey((prevKey) => prevKey + 1);
		updateSuccessMessage("");
	}, [session]);

	return { validationSchema, key };
}
