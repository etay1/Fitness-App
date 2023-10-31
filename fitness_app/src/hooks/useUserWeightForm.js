import { useState } from "react";
import { supabase } from "../supabase/client";


const useUserWeightForm = (
  userId) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [weight, setUserWeight] = useState("");
  // const [weightData, setWeightSessionData] = useState({
  //   userId: userId,
  //   date: initialDate,
  //   weight: "",
  // })
  
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };


  const handleWeightChange = (e) => {
      setUserWeight(e.target.value);
  };


  // const handleInputChange = (e) => {
  //   const {date, weight, userId } = e.target;
  //   setWeightSessionData({...weightData})
  // }


  const handleInsertion = async () => {
    try{
      const tableName = "user_weight";
      console.log("working");
      console.log(userId);
      console.log(date);
      console.log(weight);
      const {data, error } = await supabase
        .from(tableName)
        .insert([{"user_id":userId, weight, date}])

      if (error) {
        console.log(error);
        throw error;

      }
   
      setIsSuccess(true);
      setSuccessMessage(`Successfully added weight`);
      console.log("succ");
    } catch (e) {
      setSuccessMessage("Failed to add weight");
      setIsSuccess(false);
    }

  }

  // const handleAddWeight = () => {
  //   let date = date;
  //   let weight = weight;
  //    let userId = userId;
  //   setSuccessMessage(
  //     'Successfully added current weight'
  //   )


  //   setIsSuccess(true);
  // };
 


  return {
    date,
    weight,
    successMessage,
    isSuccess,
    handleDateChange,
    handleWeightChange,
    handleInsertion
  };
};


export default useUserWeightForm;