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
        // session is hardcoded for insertion
        session_id: 1,
        start_time: startTime,
        end_time: endTime,
      };

      if (categoryName === "cardio") {
        // SELECT id based on exercise name------------------------------------WIP1
        const { data1, error1 } = await supabase
          .from("cardio_exercise")
          .select("cardio_exercise_id")
          .eq("name", exerciseName);

        if (error1) {
          throw error1;
        }

        const cardioData = {
          cardio_exercise_id: data1.cardio_exercise_id,
        };
        console.log(cardioData)
        // --------------------------------------------------------------------WIP1
        // INSERT INTO cardio_session
        const { data2, error2 } = await supabase
          .from("cardio_session")
          .insert([{ ...commonData, ...cardioData }]);

        if (error2) {
          throw error2;
        }
        setIsSuccess(true);
        updateSuccessMessage("Successfully added Cardio Exercise.");
      } else {
        // SELECT id based on exercise name-------------------------------------WIP2
        const { data1, error1 } = await supabase
          .from("weight_exercise")
          .select("weight_exercise_id")
          .eq("name", exerciseName);

        if (error1) {
          throw error1;
        }
        // -----------------------------------------------------------------------WIP2
        const strengthData = {
          //weight_exercise_id is hardcoded for insertion
          weight_exercise_id: data1,
          sets: sets,
          reps_per_set: repsPerSet,
        };
        // console.log(strengthData)

        // INSERT INTO weight_session
        const { data, error2 } = await supabase
          .from("weight_session")
          .insert([{ ...commonData, ...strengthData }]);
        // console.log(commonData, strengthData);
        if (error2) {
          throw error2;
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
