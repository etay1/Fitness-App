import { useState } from "react";
import { HandleDatabaseError } from "../utils/HandleDatabaseError";

export function useExerciseForm(supabase) {
  const [category, setCategory] = useState("strength");
  const [exerciseData, setExerciseData] = useState({
    exerciseName: "",
    description: "",
    caloriesPerRep: 0,
    caloriesPerDuration: 0,
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setIsSuccess(false);
  };

  const handleInsertion = async (
    values,
    categoryName,
    updateSuccessMessage
  ) => {
    console.log(category);
    const { exerciseName, caloriesPerRep, caloriesPerDuration, description } =
      values;

    const tableName =
      categoryName === "cardio" ? "cardio_exercise" : "weight_exercise";
    const calorieColumn =
      categoryName === "cardio"
        ? "calories_per_unit_duration"
        : "calories_per_rep";
    const calories =
      categoryName === "cardio" ? caloriesPerDuration : caloriesPerRep;

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
          categoryName === "cardio" ? "Cardio" : "Strength"
        } Exercise.`
      );
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
    handleInputChange,
    handleCategoryChange,
    handleInsertion,
  };
}
export default useExerciseForm;