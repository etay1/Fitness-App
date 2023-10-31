import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

export function useExerciseRegistry() {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchExercises() {
      try {
        console.log("hitting");

        const { data: cardioData, error: cardioError } = await supabase
        .from('cardio_exercise')
        .select('*')

        console.log("cardioData", cardioData);

        const { data: strengthData, error: strengthError } = await supabase
          .from('weight_exercise')
          .select('*')
          console.log("StrengthData", strengthData);

        if (cardioError || strengthError) {
          setError(cardioError || strengthError);
        } else {
          const combinedData = [...cardioData, ...strengthData];
          setExercises(combinedData);
        }
      } catch (error) {
        setError(error);
      }
    }
    fetchExercises();
  }, []);
  
  console.log("log first item")
  console.log(exercises[0]);
  
  return { exercises, error };
}
