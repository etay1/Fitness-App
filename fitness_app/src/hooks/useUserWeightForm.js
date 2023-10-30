import { useState } from "react";

const useUserWeightForm = (
  initialDate = new Date().toISOString().slice(0, 10)
) => {
  const [date, setDate] = useState(initialDate);
  const [weight, setWeight] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleAddWeight = () => {
    // You can add the logic to handle weight submission here
  };

  return {
    date,
    weight,
    handleDateChange,
    handleWeightChange,
    handleAddWeight,
  };
};

export default useUserWeightForm;
