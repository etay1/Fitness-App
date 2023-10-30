import { useState } from "react";
import { supabase } from "../supabase/client";


const useUserWeightForm = (
  initialDate = new Date().toISOString().slice(0, 10)
) => {
  const [date, setDate] = useState(initialDate);
  const [userId, setUserId] = useState("");
  const [weight, setUserWeight] = useState("");
  const [weightData, setWeightSessionData] = useState({
    userId: "",
    date: initialDate,
    weight: "",
  })
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);


  const handleGetUserId = (e) => {
    setUserId(e.session.user.id);
  }


  const handleDateChange = (e) => {
    setDate(e.target.value);
  };


  const handleWeightChange = (e) => {
      setUserWeight(e.target.value);
  };


  const handleInputChange = (e) => {
    const {date, weight, userId } = e.target;
    setWeightSessionData({...weightData})
  }


  const handleInsertion = async (date, weight, userId) => {
    try{
      const tableName = "user_weight";
      console.log("working");
      const {data, error } = await supabase
        .from(tableName)
        .insert([{date, weight, userId}])


      if (error) {
        throw error;
      }
   
      setIsSuccess(true);
      setSuccessMessage(`Successfully added weight`);
    } catch (e) {
      setSuccessMessage("Failed to add weight");
      setIsSuccess(false);
    }


  }


  const handleAddWeight = () => {
    let date = weightData.date;
    let weight = weightData.weight;
    let userId = weightData.userId;
    setSuccessMessage(
      'Successfully added current weight'
    )


    setIsSuccess(true);
  };
 


  return {
    date,
    weight,
    userId,
    successMessage,
    isSuccess,
    handleDateChange,
    handleWeightChange,
    handleAddWeight,
    handleGetUserId,
    handleInsertion
  };
};


export default useUserWeightForm;