import { useState } from "react";
import { HandleDatabaseError } from "../../utils/HandleDatabaseError";
import useRefreshPage from "../../hooks/useRefreshPage";


export function useExerciseForm(supabase, category, updateSuccessMessage) {
  const [exerciseData, setExerciseData] = useState({
    exerciseName: "",
    description: "",
    caloriesPerRep: 0,
    caloriesPerDuration: 0,
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const handleRefresh = useRefreshPage();

  const handleInsertion = async (values) => {
    const { exerciseName, caloriesPerRep, caloriesPerDuration, description } =
      values;

    console.log(exerciseName);

    const tableName =
      category === "cardio" ? "cardio_exercise" : "weight_exercise";
    const calorieColumn =
      category === "cardio" ? "calories_per_unit_duration" : "calories_per_rep";
    const calories =
      category === "cardio" ? caloriesPerDuration : caloriesPerRep;

    try {
      const { data, error } = await supabase
        .from(tableName)
        .insert([
          { name: exerciseName, [calorieColumn]: calories, description },
        ]);
      if (error) {
        throw error;
      }
      setIsSuccess(true);
      updateSuccessMessage(
        `Successfully added ${
          category === "cardio" ? "Cardio" : "Strength"
        } Exercise.`
      );
      handleRefresh();
    } catch (error) {
      console.log("db error: ", error);
      const errorCode = error.code;
      HandleDatabaseError(errorCode, updateSuccessMessage);
      setIsSuccess(false);
    }
  };

  return {
    category,
    exerciseData,
    isSuccess,
    handleInsertion,
  };
}
export default useExerciseForm;
