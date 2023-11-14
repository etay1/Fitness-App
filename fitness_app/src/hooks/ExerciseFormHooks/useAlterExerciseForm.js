import { useState } from "react";
import { HandleDatabaseError } from "../../utils/HandleDatabaseError";

export function useAlterExerciseForm(supabase, category, updateSuccessMessage) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAlter = async (values) => {
    const { exerciseId, exerciseName, caloriesPerRep, caloriesPerDuration, description } = values;

    const tableName = category === "cardio" ? "cardio_exercise" : "weight_exercise";
    const calorieColumn = category === "cardio" ? "calories_per_unit_duration" : "calories_per_rep";
    const calories = category === "cardio" ? caloriesPerDuration : caloriesPerRep;

    try {
      const { data, error } = await supabase
        .from(tableName)
        .update({
          name: exerciseName,
          [calorieColumn]: calories,
          description,
        })
        .eq("exerciseId", exerciseId);

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      updateSuccessMessage(`Exercise updated successfully.`);
    } catch (error) {
      console.error("db error: ", error);
      const errorCode = error.code;
      HandleDatabaseError(errorCode, updateSuccessMessage);
      setIsSuccess(false);
    }
  };

  return { isSuccess, handleAlter };
}

export default useAlterExerciseForm;
