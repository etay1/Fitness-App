import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useSuccessMessage } from "./useSuccessMessage";

export default function useWeightExcerciseSchema(
    updateSuccessMessage
) {
    const [validationSchema, setValidationSchema] = useState(null);


    useEffect(() => {
        setValidationSchema(
            Yup.object().shape({
                date: Yup.date().required("Date is required"),
                weight: Yup.number()
                    .min(51,"Please enter a weight above 50lbs")
                    .max(1499, "Please enter a weight below 1499lbs"),

            })
        )
    });

    return {validationSchema};
}