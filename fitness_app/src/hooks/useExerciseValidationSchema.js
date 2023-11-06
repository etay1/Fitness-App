import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useSuccessMessage } from "./useSuccessMessage";

// Custom hook to manage the validation schema and form values
export default function useExerciseValidationSchema(
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
          caloriesPerRep: Yup.number()
            .required("Calories per Rep is required")
            .min(1, "Calories per Rep must be greater than 0"),
          caloriesPerDuration: Yup.number(),
          description: Yup.string(),
        })
      );
    } else if (category === "cardio") {
      setValidationSchema(
        Yup.object().shape({
          exerciseName: Yup.string().required("Exercise Name is required"),
          caloriesPerRep: Yup.number(),
          caloriesPerDuration: Yup.number()
            .required("Calories per 15 minutes is required")
            .min(1, "Calories per 15 minutes must be greater than 0"),
          description: Yup.string(),
        })
      );
    }
    console.log(category);
    setKey((prevKey) => prevKey + 1);
    updateSuccessMessage("");
  }, [category]);

  return { validationSchema, key };
}
