import { useState } from "react";
import { supabase } from "../supabase/client";
import { useSuccessMessage } from "./useSuccessMessage";
import CategoryToggle from "../components/CategoryToggle/CategoryToggle";

export function useUserWeightForm({ session, updateSuccessMessage }) {
  // console.log(session);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [weight, setUserWeight] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  // const { updateSuccessMessage } = useSuccessMessage();

  // const userId = session.user.id;
  const userId = 2;



  const handleInsertion = async () => {
    try {
      const tableName = "user_weight";
      const { data, error } = await supabase
        .from(tableName)
        .insert([{ user_id: userId, weight, date }]);

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      updateSuccessMessage(`Successfully added weight`);
    } catch (e) {
      updateSuccessMessage("Failed to add weight");
      setIsSuccess(false);
    }
  };

  return {
    date,
    weight,
    isSuccess,
    handleInsertion,
  };
}

export default useUserWeightForm;
