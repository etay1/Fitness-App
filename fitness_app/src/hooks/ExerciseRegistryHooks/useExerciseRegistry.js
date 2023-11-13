import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client";

export function useExerciseRegistry() {
  const [strengthExercise, setStrengthExercise] = useState([]);
  const [cardioExercise, setCardioExercise] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchExercises() {
      try {
        const { data: cardioData, error: cardioError } = await supabase
          .from("cardio_exercise")
          .select("*");
        const { data: strengthData, error: strengthError } = await supabase
          .from("weight_exercise")
          .select("*");

        if (cardioError || strengthError) {
          setError(cardioError || strengthError);
        } else {
          setStrengthExercise(strengthData);
          setCardioExercise(cardioData);
        }
      } catch (error) {
        setError(error);
      }
    }
    fetchExercises();
  }, []);

  return { strengthExercise, cardioExercise, error };
}
