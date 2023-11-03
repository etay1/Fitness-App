import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useSuccessMessage } from "./useSuccessMessage";

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
          startTime: Yup.string().required("Start Time is required"),
          endTime: Yup.string().required("End Time is required"),
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
          startTime: Yup.string().required("Start Time is required"),
          endTime: Yup.string().required("End Time is required"),
        })
      );
    }
    console.log(category);
    setKey((prevKey) => prevKey + 1);
    updateSuccessMessage("");
  }, [category]);

  return { validationSchema, key };
}
