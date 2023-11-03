import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/client";

export function useSubSessionForm() {
  const [category, setCategory] = useState("strength");
  const [subSessionData, setSubSessionData] = useState({
    sessionName: "",
    exercises: [],
    startTime: "",
    endTime: "",
    sets: 0,
    repsPerSet: 0,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [cardioList, setCardioList] = useState(["cardio"]);
  const[strengthList, setStrengthList] = useState(["strength"]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSubSessionData({ ...subSessionData, [name]: value });
  };

  const fetchExerciseData = async () => {
    if(category == "strength") {
        let { data: weight_exercise, error } = await supabase
      .from('weight_exercise')
      .select('name,weight_exercise_id')

      setStrengthList(weight_exercise);
    }
    if(category == "cardio") {
        let { data: cardio_exercise, error } = await supabase
      .from('cardio_exercise')
      .select('name,cardio_exercise_id')

      setCardioList(cardio_exercise);
    }

  }
  
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setIsSuccess(false);
  };

  const handleInsertion = async () => {

    const table = category === "weight" ? "weight_session" : "cardio_session";
    let number1 = 123456;
    let number2 = 33;
    let number3 = 5

    console.log(subSessionData);

    try {

      console.log(subSessionData.sessionName);
      if(category == "strength") {
        const { data, error } = await supabase
        .from('weight_session')
        .insert([{"session_id": number1, "weight_exercise_id": number2, "sets": subSessionData.sets, "reps_per_set": subSessionData.repsPerSet, "start_time": subSessionData.startTime, "end_time": subSessionData.endTime}])
        fetchExerciseData();
      }
      
      if(category == "cardio") {
        const { data, error } = await supabase
        .from('cardio_session')
        .insert([
          {"session_id": number1, "cardio_exercise_id": number3, "start_time": subSessionData.startTime, "end_time": subSessionData.endTime},
        ])
        if (error) {
          throw error;
        }
      }

    }
    catch (error) {
      console.log(error);
    }
    setIsSuccess(true);
    setSuccessMessage(
      `Successfully added ${
        category === "strength" ? "Strength" : "Cardio"
      } Session.`
    );

    setSubSessionData({
      sessionName: "",
      exercises: [],
      startTime: "",
      endTime: "",
      sets: 0,
      repsPerSet: 0,
    });
  };

  return {
    category,
    subSessionData,
    cardioList,
    strengthList,
    successMessage,
    isSuccess,
    handleInputChange,
    handleCategoryChange,
    handleInsertion,
    fetchExerciseData,
  };
}
