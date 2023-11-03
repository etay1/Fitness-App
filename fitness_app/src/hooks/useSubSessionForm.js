import { useState } from "react";
import { HandleDatabaseError } from "../utils/HandleDatabaseError";
import { supabase } from "../supabase/client";

export function useSubSessionForm() {
  const [category, setCategory] = useState("strength");
  const [isSuccess, setIsSuccess] = useState(false);
  const [exerciseData, setExerciseData] = useState({
    exerciseName: "",
    startTime: 0,
    endTime: 0,
    sets: 0,
    repsPerSet: 0,
  });

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
    try {
      const { exerciseName, startTime, endTime, sets, repsPerSet } = values;

      // Define the common data to insert into both tables
      const commonData = {
        session_id: 1,
        start_time: startTime,
        end_time: endTime,
      };

      if (categoryName === "cardio") {
        const cardioData = {
          cardio_exercise_id: 5,
        };

        const { data, error } = await supabase
          .from("cardio_session")
          .insert([{ ...commonData, ...cardioData }]);

        if (error) {
          throw error;
        }
        setIsSuccess(true);
        updateSuccessMessage("Successfully added Cardio Exercise.");
      } else {
        const strengthData = {          
          weight_exercise_id: 135,
          sets: sets,
          reps_per_set: repsPerSet,
        };
        

        const { data, error } = await supabase
          .from("weight_session")
          .insert([{ ...commonData, ...strengthData }]);
          console.log(commonData, strengthData)
        if (error) {
          throw error;
        }

        setIsSuccess(true);
        updateSuccessMessage("Successfully added Strength Exercise.");
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
