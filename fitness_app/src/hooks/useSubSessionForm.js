import { useState } from "react";
import { HandleDatabaseError } from "../utils/HandleDatabaseError";
import { supabase } from "../supabase/client";

export function useSubSessionForm() {
  const [category, setCategory] = useState("strength");
  const [exerciseData, setExerciseData] = useState({
    exerciseName: "",
    startTime: 0,
    endTime: 0,
    sets: 0,
    repsPerSet: 0,
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
    updateSuccessMessage,
  ) => {
    try {
      const { exerciseName, startTime, endTime, sets, repsPerSet } = values;

      // Define the common data to insert into both tables
      const commonData = {
        name: exerciseName,
        startTime,
        endTime,
      };

      if (categoryName === "cardio") {
        const { data, error } = await supabase
          .from("cardio_session")
          .insert([commonData]);
        
        if (error) {
          throw error;
        }

        setIsSuccess(true);
        updateSuccessMessage("Successfully added Cardio Exercise.");
      } else if (categoryName === "strength") {
        const { data, error } = await supabase
          .from("weight_session")
          .insert([{ ...commonData, sets, repsPerSet }]);
        
        if (error) {
          throw error;
        }

        setIsSuccess(true);
        updateSuccessMessage("Successfully added Strength Exercise.");
      } else {
        // Handle an unsupported category
        throw new Error("Unsupported category");
      }
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