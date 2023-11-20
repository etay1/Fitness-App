import { useState, useEffect } from "react";

const useFetchWeightData = ({ supabase, session }) => {
  const [weightData, setWeightData] = useState({ weights: [], dates: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("user_weight")
          .select("weight, date")
          .eq("user_id", session.user.id);

        if (error) {
          console.error(error);
        } else {
          const weights = data.map((weightObj) => weightObj.weight);
          const dates = data.map((weightObj) => weightObj.date);
          setWeightData({ weights, dates });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [supabase, session.user.id]);

  return weightData;
};

export default useFetchWeightData;
