import { useState } from "react";
import { supabase } from "../supabase/client";


const useUserWeightForm = (
  userId) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [weight, setUserWeight] = useState(""); 
  const [successMessage, setSuccessMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };


  const handleWeightChange = (e) => {
      setUserWeight(e.target.value);
  };

  const handleInsertion = async () => {
    try{
      const tableName = "user_weight";
      console.log("working");
      const {data, error } = await supabase
        .from(tableName)
        .insert([{user_id:userId, weight, date}]);

      if (error) {
        throw error;
      }
      setSuccessMessage(`Successfully added weight`);
    } catch (e) {
      console.log(e.code);
      
    }
    setIsClicked(true);

  }

  return {
    date,
    weight,
    successMessage,
    isClicked,
    handleDateChange,
    handleWeightChange,
    handleInsertion
  };
};

export default useUserWeightForm;