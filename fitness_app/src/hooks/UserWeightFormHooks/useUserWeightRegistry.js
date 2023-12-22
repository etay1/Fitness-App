import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client";

export function useUserWeightRegistry() {
  const [userWeights, setUserWeights] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserWeights() {
      try {
        let { data, error } = await supabase.from("user_weight").select("*");
        //   .select("user_id");

        if (error) {
          setError(error);
        } else {
            setUserWeights(data);
        }
      } catch (error) {
        setError(error);
      }
    }
    fetchUserWeights();
  }, []);

  return { userWeights, error };
}
