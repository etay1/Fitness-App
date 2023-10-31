import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

export function useExerciseRegistry() {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchExercises() {
      try {
        const { data: cardioData, error: cardioError } = await supabase
          .from("cardio_exercise")
          .select("name", "description");
        const { data: strengthData, error: strengthError } = await supabase
          .from("weight_exercise")
          .select("name", "description");

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

  return { exercises, error };
}
