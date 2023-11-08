import { useState } from "react";
import * as Yup from "yup";

export default function useWeightValidationSchema(updateSuccessMessage, session) {
    const [validationSchema, setValidationSchema] = useState(
        Yup.object().shape({
            date: Yup.date().required("Date is required"),
            weight: Yup.number()
                .min(51,"Please enter a weight above 50lbs")
                .max(1499, "Please enter a weight below 1499lbs"),
            user_id: Yup.string().equals([session.user.id], "Invalid user ID")
                .required("User ID is required"),
        })
    );

    return { validationSchema };
}
