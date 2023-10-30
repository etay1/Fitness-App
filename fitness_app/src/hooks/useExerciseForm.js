import { useState } from "react";
import { supabase } from "../supabase/client";

export function useExerciseForm() {
  const [category, setCategory] = useState("strength");
  const [exerciseData, setExerciseData] = useState({
    exerciseName: "",
    description: "",
    caloriesPerRep: 0,
    caloriesPerDuration: 0,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setIsSuccess(false);
  };

  const handleInsertion = async (name, description, calories) => {
    try {
      const tableName =
        category === "cardio" ? "cardio_exercise" : "weight_exercise";
      const columnName =
        category === "cardio" ? "calories_per_15" : "calories_per_rep";
      console.log("working");
      const { data, error } = await supabase
        .from(tableName)
        .insert([{ name, description, [columnName]: calories }]);

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      setSuccessMessage(
        `Successfully added ${
          category === "cardio" ? "Cardio" : "Strength"
        } Exercise.`
      );
    } catch (error) {
      setSuccessMessage("Failed to add exercise.");
      setIsSuccess(true);
    }
  };

  const validateInput = (name, calories, setSuccessMessage) => {
    if (!name) {
      setSuccessMessage(
        `Invalid field: ${
          !name
            ? "Exercise Name"
            : category === "cardio"
            ? "Calories / 15 minutes"
            : "Calories / rep"
        } is empty.`
      );

      return false;
    }

    return true;
  };

  const handleAddExercise = () => {
    let name = exerciseData.exerciseName;
    let calories =
      category === "cardio"
        ? exerciseData.caloriesPerDuration
        : exerciseData.caloriesPerRep;
    let description = exerciseData.description;
    const isValid = validateInput(name, calories, setSuccessMessage); // Pass setSuccessMessage here

    if (isValid) {
      handleInsertion(name, description, calories);
      setExerciseData({
        exerciseName: "",
        description: "",
        caloriesPerRep: 0,
        caloriesPerDuration: 0,
      });
    }
  };

  return {
    category,
    exerciseData,
    successMessage,
    isSuccess,
    handleInputChange,
    handleCategoryChange,
    handleAddExercise,
    handleInsertion,
  };
}
