import { useState, useEffect } from "react";
import * as Yup from "yup";

// Custom hook to manage the validation schema
function useExerciseValidationSchema(category) {
  const [validationSchema, setValidationSchema] = useState(null);

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
  }, [category]);

  return validationSchema;
}

export default useExerciseValidationSchema;
